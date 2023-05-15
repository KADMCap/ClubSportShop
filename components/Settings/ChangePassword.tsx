import { Input } from "../PaymentForm/Input";
import { useForm } from "react-hook-form";
import { Button, SubmitButton } from "../Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    oldPassword: yup.string().required(),
    newPassword: yup.string().required(),
    confirm: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export const ChangePassword = () => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  return (
    <div className="flex flex-col justify-start flex-1 w-full">
      <p className="font-semibold">Change Password</p>
      <form className="flex flex-col w-full gap-2 mt-2">
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            Old Password
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Old Password"
            required
            {...register("oldPassword")}
          />
          <span className="text-sm text-red-500">
            {errors.oldPassword?.message}
          </span>
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            New Password
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="New Password"
            required
            {...register("newPassword")}
          />
          <span className="text-sm text-red-500">
            {errors.oldPassword?.message}
          </span>
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            Confirm
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Confirm"
            required
            {...register("confirm")}
          />
          <span className="text-sm text-red-500">
            {errors.confirm?.message}
          </span>
        </div>
        <div>
          <SubmitButton value="CHANGE" />
        </div>
      </form>
    </div>
  );
};
