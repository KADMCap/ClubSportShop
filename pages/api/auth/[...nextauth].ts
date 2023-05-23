import {
  GetAccountByEmailDocument,
  GetAccountByEmailQuery,
  GetAccountByEmailQueryVariables,
} from "@/generated/graphql";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        const userByEmail = await authorizedApolloClient.query<
          GetAccountByEmailQuery,
          GetAccountByEmailQueryVariables
        >({
          query: GetAccountByEmailDocument,
          variables: {
            email: credentials.username,
          },
        });

        if (!userByEmail.data.account?.password) {
          return null;
        }

        const arePasswordEqual = await bcrypt.compare(
          credentials.password,
          userByEmail.data.account.password
        );

        if (!arePasswordEqual) {
          return null;
        }

        return {
          id: userByEmail.data.account.id,
          email: userByEmail.data.account.email,
        };
      },
    }),
  ],
});
