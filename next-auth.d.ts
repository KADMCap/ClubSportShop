import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string | null;
      fullName?: string | null;
      email?: string | null;
      avatar?: string | null;
      address?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
