import { Layout } from "@/components/Layout";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, SubmitButton } from "@/components/Buttons/Button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";
import Link from "next/link";
import { FacebookIcon, GoogleIcon } from "@/components/Icons";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

const signupFormSchema = yup
  .object({
    //csrfToken: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type SignUpFormData = yup.InferType<typeof signupFormSchema>;

const SignInPage = ({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

  if (session.status === "authenticated") {
    router.push("/");
    return null;
  }

  const onSubmit = handleSubmit(async (data) => {
    const response = await signIn("credentials", {
      redirect: false,
      csrfToken: csrfToken,
      email: data.email,
      password: data.password,
    });

    if (!response?.ok) {
      setWrongCrerdentials(true);
    } else {
      setWrongCrerdentials(false);
    }
  });

  return (
    <Layout>
      <div className="flex justify-center w-full">
        <section className="flex flex-col justify-center items-center w-full max-w-[400px] bg-primaryLight dark:bg-primaryDark rounded-md p-4 gap-2">
          <h2>Login to your account</h2>
          {wrongCredentials && (
            <div className="flex justify-center w-full p-2 text-red-900 bg-red-400 rounded-md">
              Invalid email or password
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
                Password
              </label>
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                {...register("password", { required: true })}
              />
            </div>
            <SubmitButton value="Sign in" />
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
          <p className="pt-4">
            You do not have an account?{" "}
            <Link href="/auth/signup" className="underline text-primaryBlue">
              Sign up
            </Link>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default SignInPage;
