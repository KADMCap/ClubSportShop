import { SubmitButton } from "../Buttons/Button";
import { Input } from "../PaymentForm/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup
  .object({
    orderId: yup.string().required(),
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
  fullName: string;
  email: string;
  phoneNumber: string;
  postCode: string;
  city: string;
  street: string;
}

export const AddressForm = ({
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

  useEffect(() => {
    setValue("fullName", fullName);
    setValue("email", email);
    setValue("phoneNumber", phoneNumber);
    setValue("postCode", postCode);
    setValue("city", city);
    setValue("street", street);
  }, []);

  const onSubmit = () => {
    console.log("onSubmit");
  };
  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" value="10009929" {...register("orderId")} />
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Input
          label="Full Name"
          type="text"
          placeholder="John Doe"
          register={register}
          name="fullName"
          errorMsg={errors.fullName?.message}
        />
        <Input
          label="Email address"
          type="email"
          placeholder="john@mail.com"
          register={register}
          name="email"
          errorMsg={errors.email?.message}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="123-456-789"
          register={register}
          name="phoneNumber"
          errorMsg={errors.phoneNumber?.message}
        />
        <Input
          label="Post Code"
          type="tel"
          placeholder="12-345"
          register={register}
          name="postCode"
          errorMsg={errors.postCode?.message}
        />
        <Input
          label="City"
          type="string"
          placeholder="Poznan"
          register={register}
          name="city"
          errorMsg={errors.city?.message}
        />
        <Input
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
