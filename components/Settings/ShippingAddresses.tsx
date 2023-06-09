import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons";
import { AddressForm } from "./AddressForm";
import { Address, Exact, GetUserAddressesQuery } from "@/generated/graphql";
import { ApolloQueryResult } from "@apollo/client";

interface Props {
  addresses: GetUserAddressesQuery["addresses"];
  refetch: (
    variables?:
      | Partial<
          Exact<{
            userId: string;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetUserAddressesQuery>>;
}

export const ShippingAddresses = ({ addresses, refetch }: Props) => {
  const [open, setOpen] = useState("");

  const toggleAddress = (name: string) => {
    if (open === name) setOpen("");
    else setOpen(name);
  };
  return (
    <div className="flex flex-col justify-start w-full gap-2">
      <p className="font-semibold">Shipping Addresses</p>
      {addresses.map((address) => (
        <div key={address.id}>
          <button
            className="flex flex-row items-start justify-between min-w-[120px] pb-2"
            onClick={() => toggleAddress(address.addressName)}
          >
            <p>{address.addressName}</p>
            <div className="bg-transparent">
              {open === address.addressName ? (
                <ChevronUpIcon />
              ) : (
                <ChevronDownIcon />
              )}
            </div>
          </button>
          {open === address.addressName && (
            <AddressForm
              addressId={address.id}
              addressName={address.addressName}
              fullName={address.fullName}
              email={address.emailAddress}
              phoneNumber={address.phoneNumber}
              city={address.city}
              postCode={address.postCode}
              street={address.streetAddress}
              isNew={false}
              refetch={refetch}
            />
          )}
        </div>
      ))}
      <div>
        <button
          className="flex flex-row items-start justify-between min-w-[120px] pb-2"
          onClick={() => toggleAddress("new")}
        >
          <p>
            Add new address <span className="text-md">+</span>
          </p>
        </button>
        {open === "new" && (
          <AddressForm
            addressName=""
            fullName=""
            email=""
            phoneNumber=""
            city=""
            postCode=""
            street=""
            isNew={true}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};
