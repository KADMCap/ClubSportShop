import { NextApiHandler } from "next";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import {
  CreateReviewDocument,
  CreateReviewMutationResult,
} from "@/generated/graphql";

const AddReviewHandler: NextApiHandler = async (req, res) => {
  console.log("req:", req.body);
  const { productId, content, rating, userData } = req.body;

  const response =
    await authorizedApolloClient.mutate<CreateReviewMutationResult>({
      mutation: CreateReviewDocument,
      variables: {
        id: productId,
        reviews: {
          create: [
            {
              content: content,
              rating: rating,
            },
          ],
        },
      },
    });
  console.log("add review", response);
  res.json({ status: 200, data: response });
};

export default AddReviewHandler;
