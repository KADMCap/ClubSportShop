import { useForm, SubmitHandler, useFormState } from "react-hook-form";
import { Button } from "../Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
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
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data, "data");
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
        <select className="px-2 py-1 rounded-md bg-secondaryLight dark:bg-secondaryDark">
          <option value="New">New Address</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </section>
      <section className="flex flex-col gap-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="full_name"
                className="block mb-2 text-sm dark:text-white"
              >
                Full name
              </label>
              <input
                type="text"
                id="full_name"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
                {...register("fullName")}
              />
              <span className="text-sm text-red-500">
                {errors.fullName?.message}
              </span>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
                {...register("email")}
              />
              <span className="text-sm text-red-500">
                {errors.email?.message}
              </span>
            </div>
            <div>
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
            </div>
            <div>
              <label
                htmlFor="post_code"
                className="block mb-2 text-sm dark:text-white"
              >
                Post Code
              </label>
              <input
                type="tel"
                id="post_code"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="11-111"
                pattern="[0-9]{2}-[0-9]{3}"
                required
                {...register("postCode")}
              />
              <span className="text-sm text-red-500">
                {errors.postCode?.message}
              </span>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Poznan"
                required
                {...register("city")}
              />
              <span className="text-sm text-red-500">
                {errors.city?.message}
              </span>
            </div>
            <div>
              <label
                htmlFor="street"
                className="block mb-2 text-sm dark:text-white"
              >
                Street address
              </label>
              <input
                type="text"
                id="street"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Polska 567/89"
                required
                {...register("street")}
              />
              <span className="text-sm text-red-500">
                {errors.street?.message}
              </span>
            </div>
          </div>
          <input
            type="submit"
            className="text-white outline-none bg-primaryBlue hover:bg-darkBlue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-darkBlue"
          />
        </form>
      </section>
      <section className="flex flex-row items-center justify-center w-full gap-2">
        <Button variant="tertiary" onClick={() => {}}>
          DECLINE
        </Button>
        {/* <button
          type="submit"
          className="text-white outline-none bg-primaryBlue hover:bg-darkBlue focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-darkBlue"
        >
          CONFIRM
        </button> */}
      </section>
    </div>
  );
};
