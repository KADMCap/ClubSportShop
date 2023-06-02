import React, { useState } from "react";
import addresses from "@/mocks/shippingAddresses.json";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons";
import { AddressForm } from "./AddressForm";

export const ShippingAddresses = () => {
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
            onClick={() => toggleAddress(address.name)}
          >
            <p>{address.name}</p>
            <div className="bg-transparent">
              {open === address.name ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </div>
          </button>
          {open === address.name && (
            <AddressForm
              addressName={address.name}
              fullName={address.fullName}
              email={address.email}
              phoneNumber={address.phoneNumber}
              city={address.city}
              postCode={address.postCode}
              street={address.street}
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
          />
        )}
      </div>
    </div>
  );
};
