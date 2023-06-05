import { SubmitButton } from "../Buttons/Button";
import { AddressInput } from "./AddressInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { apolloClient } from "@/graphql/apolloClient";
import {
  CreateUserAddressDocument,
  useCreateUserAddressMutation,
} from "@/generated/graphql";
import { useSession } from "next-auth/react";
import { useMutation } from "@apollo/client";
import { AlertModal } from "../Modals/AlertModal";

const schema = yup
  .object({
    addressName: yup.string().required(),
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    postCode: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

interface Props {
  addressName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  postCode: string;
  city: string;
  street: string;
}

export const AddressForm = ({
  addressName,
  fullName,
  email,
  phoneNumber,
  postCode,
  city,
  street,
}: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const session = useSession();
  const [createUserAddressMutation, { data, loading, error }] =
    useCreateUserAddressMutation();
  const [createAlert, SetCreateAlert] = useState("");

  useEffect(() => {
    setValue("addressName", addressName);
    setValue("fullName", fullName);
    setValue("email", email);
    setValue("phoneNumber", phoneNumber);
    setValue("postCode", postCode);
    setValue("city", city);
    setValue("street", street);
  }, []);

  const onSubmit = async (data: FormData) => {
    const response = await createUserAddressMutation({
      variables: {
        address: {
          addressName: data.addressName,
          city: data.city,
          emailAddress: data.email,
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          postCode: data.postCode,
          streetAddress: data.street,
          userId: session.data?.user.id || "empty",
        },
      },
    });

    if (response.data?.createAddress) {
      alert("Your data has been created");
    }
  };
  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
      <AlertModal variant="success">Success!</AlertModal>
      <AlertModal variant="warning">Warning!</AlertModal>
      <AlertModal variant="error">Error!</AlertModal>
      <AlertModal variant="info">Info!</AlertModal>
      <AddressInput
        label="Address Name"
        type="text"
        placeholder="Home"
        register={register}
        name="addressName"
        errorMsg={errors.addressName?.message}
      />
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <AddressInput
          label="Full Name"
          type="text"
          placeholder="John Doe"
          register={register}
          name="fullName"
          errorMsg={errors.fullName?.message}
        />
        <AddressInput
          label="Email address"
          type="email"
          placeholder="john@mail.com"
          register={register}
          name="email"
          errorMsg={errors.email?.message}
        />
        <AddressInput
          label="Phone Number"
          type="tel"
          placeholder="123-456-789"
          register={register}
          name="phoneNumber"
          errorMsg={errors.phoneNumber?.message}
        />
        <AddressInput
          label="Post Code"
          type="tel"
          placeholder="12-345"
          register={register}
          name="postCode"
          errorMsg={errors.postCode?.message}
        />
        <AddressInput
          label="City"
          type="string"
          placeholder="Poznan"
          register={register}
          name="city"
          errorMsg={errors.city?.message}
        />
        <AddressInput
          label="Street address"
          type="string"
          placeholder="Polska 21/37"
          register={register}
          name="street"
          errorMsg={errors.street?.message}
        />
      </div>
      <section className="flex flex-row items-center justify-center w-full gap-2">
        <SubmitButton value="UPDATE" />
      </section>
    </form>
  );
};
