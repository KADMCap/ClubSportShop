import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { Button, SubmitButton } from "../Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "./Input";
import addresses from "@/mocks/shippingAddresses.json";

type FormData = {
  orderId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  postCode: string;
  city: string;
  street: string;
};

// const schema = yup
//   .object({
//     fullName: yup.string().required(),
//     email: yup.string().email().required(),
//     phoneNumber: yup.string().required(),
//     postCode: yup.string().required(),
//     city: yup.string().required(),
//     street: yup.string().required(),
//   })
//   .required();

// type FormData = yup.InferType<typeof schema>;

export const ShippingForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const userId = "123"; //temp for finding user address
  const onSubmit = (data: FormData) => console.log(data);

  const fillForm = (addressId: string) => {
    if (addressId === "") {
      setValue("fullName", "");
      setValue("email", "");
      setValue("phoneNumber", "");
      setValue("postCode", "");
      setValue("city", "");
      setValue("street", "");
    }
    let address = addresses.find((address) => address.id === addressId);
    if (address) {
      setValue("fullName", address.fullName);
      setValue("email", address.email);
      setValue("phoneNumber", address.phoneNumber);
      setValue("postCode", address.postCode);
      setValue("city", address.city);
      setValue("street", address.street);
    }
  };
  return (
    <div className="flex flex-col gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
      <section className="flex flex-row items-center justify-between">
        <div>
          <p className="font-semibold">
            Order #10009929{" "}
            <span className="text-sm text-primaryGray"> / 05.04.2023</span>
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <p>
            Items: <span className="font-semibold">3</span>
          </p>
          <p>
            Total Price: <span className="font-semibold">$174.00</span>
          </p>
        </div>
      </section>
      <section>
        Select Address:{" "}
        <select
          className="px-2 py-1 rounded-md bg-secondaryLight dark:bg-secondaryDark"
          onChange={(e) => fillForm(e.target.value)}
        >
          <option value="">New Address</option>
          {addresses.map((address) => (
            <option key={address.id} value={address.id}>
              {address.name}
            </option>
          ))}
        </select>
      </section>
      <section className="flex flex-col gap-1">
        <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-456-789"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                required
                {...register("phoneNumber")}
              />
              <span className="text-sm text-red-500">
                {errors.phoneNumber?.message}
              </span>
            </div> */}
          </div>
          <section className="flex flex-row items-center justify-center w-full gap-2">
            <Button variant="tertiary" onClick={() => {}}>
              DECLINE
            </Button>
            <SubmitButton value="CONFIRM" />
          </section>
        </form>
      </section>
    </div>
  );
};
