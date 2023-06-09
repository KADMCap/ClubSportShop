import { useForm } from "react-hook-form";
import { SubmitButton } from "../Buttons/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { apolloClient } from "@/graphql/apolloClient";
import { UpdateAccountDataDocument } from "@/generated/graphql";
import { ChangePersonalDataModal } from "../Modals/ChangePersonalDataModal";

const schema = yup
  .object({
    userName: yup.string().required(),
    // email: yup.string().email().required(),
    //avatar: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

interface Props {
  id: string;
  email: string;
  userName: string | null | undefined;
  avatar: string | null | undefined;
}

export const PersonalData = ({ id, email, userName, avatar }: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [dataIsChanged, setDataIsChanged] = useState(false);

  useEffect(() => {
    userName && setValue("userName", userName);
    //avatar && setValue("avatar", avatar);
  }, [userName, avatar, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const payload = {
      id,
      userName: data.userName,
    };
    const response = await fetch("/api/updateUser/personalData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(response);
    if (response.ok) {
      setDataIsChanged(true);
    }
  });

  return (
    <div className="flex flex-col justify-start flex-1 w-full">
      <ChangePersonalDataModal
        isOpen={dataIsChanged}
        setIsOpen={setDataIsChanged}
      />
      <p className="font-semibold">Personal Data</p>
      <form className="flex flex-col w-full gap-2 mt-2" onSubmit={onSubmit}>
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            Id
          </label>
          {id}
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            User Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
            required
            {...register("userName")}
          />
          <span className="text-sm text-red-500">
            {errors.userName?.message}
          </span>
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            Email
          </label>
          {email}
          {/* <input
            type="text"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
            {...register("email")}
          /> */}
        </div>
        <div>
          <label className="block mb-1 text-sm font-semibold dark:text-white">
            Avatar
          </label>
          <div className="w-12 h-12 rounded-full bg-primaryBlue"></div>
        </div>
        <div>
          <SubmitButton value="UPDATE" />
        </div>
      </form>
    </div>
  );
};
