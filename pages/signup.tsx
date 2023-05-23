import { Layout } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitButton } from "@/components/Buttons/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const signupFormSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type SignUpFormData = yup.InferType<typeof signupFormSchema>;

const SignupPage = () => {
  const session = useSession();
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signupFormSchema),
  });

  if (session.status === "authenticated") {
    router.push("/");
    return null;
  }

  const onSubmit = handleSubmit(async (data) => {
    await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });
  return (
    <Layout>
      <form className="flex flex-col gap-1" onSubmit={onSubmit}>
        <div>
          <label className="block mb-2 text-sm dark:text-white">Email</label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@mail.com"
            required
            {...register("email", { required: true })}
          />
          {/* <span className="text-sm text-red-500">{errorMsg}</span> */}
        </div>
        <div>
          <label className="block mb-2 text-sm dark:text-white">Password</label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            {...register("password", { required: true })}
          />
          {/* <span className="text-sm text-red-500">{errorMsg}</span> */}
        </div>
        <SubmitButton value="SIGNUP" />
      </form>
    </Layout>
  );
};

export default SignupPage;
