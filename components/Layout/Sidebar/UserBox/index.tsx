import { LogoutIcon } from "@/components/Icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

export const UserBox = ({ session }: Props) => {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <Link href="/settings" passHref className="flex items-center gap-2">
        <div className="flex-shrink-0">
          {session.user.image ? (
            <img
              className="w-8 h-8 rounded-full"
              src={session.user.image}
              alt="avatar"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-primaryBlue"></div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate dark:text-white">
            {session.user.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {session.user.email}
          </p>
        </div>
      </Link>
      <button onClick={() => signOut()}>
        <LogoutIcon />
      </button>
    </div>
  );
};
