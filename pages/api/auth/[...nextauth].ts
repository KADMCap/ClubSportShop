import {
  CreateAccountByGoogleDocument,
  CreateAccountByGoogleMutation,
  CreateAccountByGoogleMutationVariables,
  GetAccountByEmailDocument,
  GetAccountByEmailQuery,
  GetAccountByEmailQueryVariables,
} from "@/generated/graphql";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

const { GOOGLE_CLIENT_ID = "", GOOGLE_CLIENT_SECRET = "" } = process.env;
export const authOptions: NextAuthOptions = {
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
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("signIn", user, account, profile);
      if (!user.email) {
        return false;
      }
      const userByEmail = await authorizedApolloClient.query<
        GetAccountByEmailQuery,
        GetAccountByEmailQueryVariables
      >({
        query: GetAccountByEmailDocument,
        variables: {
          email: user.email,
        },
      });
      console.log("FIND USER", userByEmail);
      if (!userByEmail.data.account) {
        console.log("CREATING USER");
        const res = await authorizedApolloClient.mutate<
          CreateAccountByGoogleMutation,
          CreateAccountByGoogleMutationVariables
        >({
          mutation: CreateAccountByGoogleDocument,
          variables: {
            email: user.email,
            fullName: user.name ? user.name : "",
            avatar: user.image ? user.image : "",
          },
        });
        if (res.data) return true;
      }
      return true;
    },
    async jwt({ token, user, account, profile }) {
      return token;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
};

export default NextAuth(authOptions);
