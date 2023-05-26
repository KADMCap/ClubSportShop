import { NextApiHandler } from "next";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import {
  UpdateAccountDataDocument,
  UpdateAccountDataMutation,
  UpdateAccountDataMutationVariables,
} from "@/generated/graphql";

const PersonalDataHandler: NextApiHandler = async (req, res) => {
  const { id, userName } = req.body;

  const response = await authorizedApolloClient.mutate<
    UpdateAccountDataMutation,
    UpdateAccountDataMutationVariables
  >({
    mutation: UpdateAccountDataDocument,
    variables: {
      id: id,
      newUserName: userName,
    },
  });
  console.log("personal handler", response);
  res.json({ status: 200, data: response });
};

export default PersonalDataHandler;
