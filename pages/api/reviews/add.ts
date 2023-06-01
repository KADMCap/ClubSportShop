import { NextApiHandler } from "next";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import {
  CreateReviewDocument,
  CreateReviewMutationResult,
} from "@/generated/graphql";

const AddReviewHandler: NextApiHandler = async (req, res) => {
  console.log("req:", req.body);
  const { accountId, productId, content, rating } = req.body;

  const response =
    await authorizedApolloClient.mutate<CreateReviewMutationResult>({
      mutation: CreateReviewDocument,
      variables: {
        accountId,
        productId,
        content,
        rating,
      },
    });
  console.log("add review", response);
  res.json({ status: 200, data: response });
};

export default AddReviewHandler;
