import { NextApiHandler } from "next";
import * as bcrypt from "bcrypt";
import { apolloClient, authorizedApolloClient } from "@/graphql/apolloClient";
import {
  CreateAccountDocument,
  CreateAccountMutation,
  CreateAccountMutationVariables,
} from "@/generated/graphql";

const SignupHandler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 12);

  console.log(email, password, passwordHash);
  const user = await authorizedApolloClient.mutate<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >({
    mutation: CreateAccountDocument,
    variables: {
      email: email,
      password: passwordHash,
    },
  });

  res.json({ userId: user.data?.createAccount?.id });
};

export default SignupHandler;
