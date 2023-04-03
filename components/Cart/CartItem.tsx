import Image from "next/image";

export const CartItem = () => {
  return (
    <div className="flex flex-row items-center w-full gap-2">
      <div className="text-darkGray dark:text-primaryGray">1</div>
      <div className="flex flex-row items-center justify-between w-full p-2 rounded-lg bg-secondaryLight dark:bg-secondaryDark dark:text-white">
        <div className="flex flex-row gap-2">
          <Image
            src="https://naszsklep-api.vercel.app/images/71YXzeOuslL._AC_UY879_.jpg"
            alt="image"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <p className="font-semibold">Super Kit</p>
            <p className="items-center font-semibold">
              <span className="text-sm text-darkGray dark:text-primaryGray">
                Size:
              </span>{" "}
              M
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 font-semibold">
          <div className="flex flex-row items-center gap-2 px-2 rounded-sm bg-primaryLight dark:bg-primaryDark">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <div>$75.00</div>
        </div>
      </div>
    </div>
  );
};
