import { Layout } from "@/components/Layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, SubmitButton } from "@/components/Buttons/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GithubIcon, GoogleIcon } from "@/components/Icons";
import { useState } from "react";

const signupFormSchema = yup
  .object({
    email: yup.string().email().required(),
    fullName: yup.string().required(),
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
  const [wrongCredentials, setWrongCrerdentials] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  if (session.status === "authenticated") {
    router.push("/");
    return null;
  }

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response?.ok) {
      setWrongCrerdentials(true);
      setAccountCreated(false);
    } else {
      setWrongCrerdentials(false);
      setAccountCreated(true);
    }
  });
  return (
    <Layout>
      <div className="flex justify-center w-full">
        <section className="flex flex-col justify-center items-center w-full max-w-[400px] bg-primaryLight dark:bg-primaryDark rounded-md p-4 gap-2">
          <h2>Register new account</h2>
          {accountCreated && (
            <div className="flex justify-center w-full p-2 text-green-900 bg-green-400 rounded-md">
              Your account is created. Please singin.{" "}
              <Link href="/auth/signin" className="underline text-primaryBlue">
                Sign in
              </Link>
            </div>
          )}
          {wrongCredentials && (
            <div className="flex justify-center w-full p-2 text-red-900 bg-red-400 rounded-md">
              This account is already registered
            </div>
          )}
          <form className="flex flex-col w-full gap-2" onSubmit={onSubmit}>
            <div>
              <label className="block mb-2 text-sm dark:text-white">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@mail.com"
                required
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm dark:text-white">
                Username
              </label>
              <input
                type="test"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="User Name"
                required
                {...register("fullName", { required: true })}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm dark:text-white">
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                {...register("password", { required: true })}
              />
              {/* <span className="text-sm text-red-500">{errorMsg}</span> */}
            </div>
            <SubmitButton value="Sign up" />
          </form>
          <p>or</p>
          <Button
            className="flex flex-row items-center justify-center gap-2"
            onClick={() => signIn("google")}
            full
            variant={"secondary"}
          >
            <GoogleIcon />
            Sign in with Google
          </Button>
          <Button
            className="flex flex-row items-center justify-center gap-2"
            onClick={() => signIn("github")}
            full
            variant={"secondary"}
          >
            <GithubIcon />
            Sign in with Github
          </Button>
          <p className="pt-4">
            You already have an account?{" "}
            <Link href="/auth/signin" className="underline text-primaryBlue">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default SignupPage;
