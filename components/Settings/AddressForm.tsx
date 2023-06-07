import { Button, SubmitButton } from "../Buttons/Button";
import { AddressInput } from "./AddressInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import {
  Exact,
  GetUserAddressesQuery,
  useCreateUserAddressMutation,
  useDeleteUserAddressMutation,
  useUpdateUserAddressMutation,
} from "@/generated/graphql";
import { useSession } from "next-auth/react";
import { ApolloQueryResult } from "@apollo/client";
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
  addressId?: string;
  addressName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  postCode: string;
  city: string;
  street: string;
  isNew: boolean;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            userId: string;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetUserAddressesQuery>>;
}

type AlertModal = {
  open: boolean;
  variant: "success" | "warning" | "error" | "info";
  value: string;
};

export const AddressForm = ({
  addressId = "",
  addressName,
  fullName,
  email,
  phoneNumber,
  postCode,
  city,
  street,
  isNew,
  refetch,
}: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const session = useSession();
  const [
    createUserAddressMutation,
    {
      data: createAddressData,
      loading: createAddressLoading,
      error: createAddressError,
    },
  ] = useCreateUserAddressMutation();
  const [
    updateUserAddressMutation,
    {
      data: updateAddressData,
      loading: updateAddressLoading,
      error: updateAddressError,
    },
  ] = useUpdateUserAddressMutation();
  const [
    deleteUserAddressMutation,
    {
      data: deleteAddressData,
      loading: deleteAddressLoading,
      error: deleteAddressError,
    },
  ] = useDeleteUserAddressMutation();
  const [createAlert, SetCreateAlert] = useState<AlertModal>({
    open: false,
    variant: "success",
    value: "",
  });

  useEffect(() => {
    setValue("addressName", addressName);
    setValue("fullName", fullName);
    setValue("email", email);
    setValue("phoneNumber", phoneNumber);
    setValue("postCode", postCode);
    setValue("city", city);
    setValue("street", street);
  }, []);

  const onSubmitNew = async (data: FormData) => {
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
      SetCreateAlert({
        open: true,
        variant: "success",
        value: "Success! Your address is added!",
      });
      reset();
      refetch();
    }
    if (createAddressError) {
      SetCreateAlert({
        open: true,
        variant: "error",
        value: "Error! Something went wrong!",
      });
      reset();
    }
  };

  const onSubmitUpdate = async (data: FormData) => {
    console.log("update");
    const response = await updateUserAddressMutation({
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
        addressId: addressId,
      },
    });

    if (response.data?.updateAddress) {
      SetCreateAlert({
        open: true,
        variant: "success",
        value: "Success! Your address is updated!",
      });
      reset();
      refetch();
    }
    if (updateAddressError) {
      SetCreateAlert({
        open: true,
        variant: "error",
        value: "Error! Something went wrong!",
      });
      reset();
    }
  };

  const handleDelete = async () => {
    const response = await deleteUserAddressMutation({
      variables: {
        addressId,
      },
    });
    if (response.data?.deleteAddress) {
      refetch();
    }
  };

  const closeAlert = () => {
    SetCreateAlert({
      open: false,
      variant: "success",
      value: "",
    });
  };
  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={
        isNew ? handleSubmit(onSubmitNew) : handleSubmit(onSubmitUpdate)
      }
    >
      {createAlert.open && (
        <AlertModal variant={createAlert.variant} closeAlert={closeAlert}>
          {createAlert.value}
        </AlertModal>
      )}
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
        <SubmitButton value={isNew ? "CREATE" : "UPDATE"} />
        {!isNew && (
          <Button variant="danger" onClick={handleDelete}>
            DELETE
          </Button>
        )}
      </section>
    </form>
  );
};
