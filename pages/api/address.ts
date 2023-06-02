import { NextApiHandler } from "next";
import { authorizedApolloClient } from "@/graphql/apolloClient";
import { CreateUserAddressDocument } from "@/generated/graphql";

const UserAddressHandler: NextApiHandler = async (req, res) => {
  const { data, userId } = req.body;
  console.log(req.body);

  const response = await authorizedApolloClient.mutate({
    mutation: CreateUserAddressDocument,
    variables: {
      address: {
        create: {
          addressName: data.addressName,
          city: data.city,
          emailAddress: data.email,
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
          postCode: data.postCode,
          streetAddress: data.street,
          userId,
        },
      },
    },
  });
  console.log("personal handler", response);
  res.json({ status: 200, data: response });
};

export default UserAddressHandler;
