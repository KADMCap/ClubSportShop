export interface User {
  id: string;
  name: string;
  nickname: string;
  email: string;
  avatar: string;
  premium: boolean;
  shippingAddresses: ShippingAddress[];
  lastLogin: string;
  language: string;
}

export interface ShippingAddress {
  addressName: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  postCode: string;
  city: string;
  streetAddress: string;
}
