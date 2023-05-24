import { Layout } from "@/components/Layout";
import { ChangePassword } from "@/components/Settings/ChangePassword";
import { PersonalData } from "@/components/Settings/PersonalData";
import { ShippingAddresses } from "@/components/Settings/ShippingAddresses";
import { UISettings } from "@/components/Settings/UISettings";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { apolloClient } from "@/graphql/apolloClient";
import { GetUserDataDocument, GetUserDataQuery } from "@/generated/graphql";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  console.log("session ssr", session);
  const { data } = await apolloClient.query<GetUserDataQuery>({
    variables: {
      email: session.user.email,
    },
    query: GetUserDataDocument,
  });

  return {
    props: {
      data,
    },
  };
}

export default function SettingsPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //const { data: session, status } = useSession({ required: true });
  console.log(data);
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <p className="py-4 font-semibold text-md">Settings</p>
        <section className="flex flex-col w-full gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
          <div className="flex flex-col items-center w-full gap-4 md:flex-row">
            {data.account && (
              <PersonalData
                id={data.account.id}
                email={data.account.email}
                userName={data.account.fullName}
                avatar={data.account.avatar}
              />
            )}
            <ChangePassword />
          </div>
          <UISettings />
          <ShippingAddresses />
        </section>
        <br />
      </div>
    </Layout>
  );
}
