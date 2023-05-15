import { LogoutIcon } from "@/components/Icons";
import Link from "next/link";

export const UserBox = () => {
  return (
    <div className="flex items-center justify-between w-full gap-2">
      <Link href="/settings" passHref className="flex items-center gap-2">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-primaryBlue"></div>
          {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate dark:text-white">User Name</p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            username@mail.com
          </p>
        </div>
      </Link>
      <LogoutIcon />
    </div>
  );
};
