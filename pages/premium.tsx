import { Button } from "@/components/Buttons/Button";
import { CheckIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import { useState } from "react";

export default function PremiumPage() {
  const [payPer, setPayPer] = useState("month");
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <p className="py-4 font-semibold text-md">
          Premium Account: <span className="text-green-400">Active</span>
        </p>
        <p className="font-semibold text-md">
          Ready to get more from shopping?
        </p>
        <p>Choose one one our premium plans and enjoy with best offers</p>
        <section className="flex justify-center w-auto pt-4">
          <div className="flex flex-row items-center justify-center text-black rounded-lg bg-primaryLight dark:text-white dark:bg-primaryDark">
            <button
              type="button"
              className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
                payPer === "month" && "bg-secondaryLight dark:bg-secondaryDark"
              }`}
              onClick={() => setPayPer("month")}
            >
              Month
            </button>
            <button
              type="button"
              className={`flex flex-row flex-1 w-full items-center justify-start gap-1 m-1 p-1 font-medium rounded-md ${
                payPer === "year" && "bg-secondaryLight dark:bg-secondaryDark"
              }`}
              onClick={() => setPayPer("year")}
            >
              Year
            </button>
          </div>
        </section>
        <section className="flex flex-col w-full gap-2 py-4 md:flex-row">
          <div className="w-full max-w-sm p-4 rounded-lg bg-primaryLight dark:bg-primaryDark">
            <h5 className="mb-4 font-medium text-gray-500 text-md dark:text-gray-400">
              Free plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="font-semibold text-md">$</span>
              <span className="font-bold tracking-tight text-md">0</span>
              <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  5 tickets at once
                </span>
              </li>
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Free Shipping above 100$
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-sm p-4 rounded-lg bg-primaryLight dark:bg-primaryDark">
            <h5 className="mb-4 font-medium text-primaryBlue text-md ">
              Plus plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="font-semibold text-md">$</span>
              <span className="font-bold tracking-tight text-md">10</span>
              <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  10 tickets at once
                </span>
              </li>
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Free Shipping above 50$
                </span>
              </li>
            </ul>
            <Button full onClick={() => {}}>
              Choose plan
            </Button>
          </div>
          <div className="w-full max-w-sm p-4 rounded-lg bg-primaryLight dark:bg-primaryDark">
            <h5 className="mb-4 font-medium text-green-500 text-md">
              Super plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="font-semibold text-md">$</span>
              <span className="font-bold tracking-tight text-md">20</span>
              <span className="ml-1 font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20 tickets at once
                </span>
              </li>
              <li className="flex space-x-3">
                <CheckIcon />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  All Free Shipping
                </span>
              </li>
            </ul>
            <Button full onClick={() => {}}>
              Choose plan
            </Button>
          </div>
        </section>
        <section>
          <p className="py-4 font-semibold">My premium orders:</p>
          <div className="flex flex-row justify-between w-full gap-4 px-4 py-2 rounded-md bg-primaryLight dark:bg-primaryDark md:rounded-lg">
            <p>
              Plan: <span className="font-semibold">Plus</span>
            </p>
            <p>
              Price: <span className="font-semibold">$20.00</span>
            </p>
            <p>
              Date: <span className="font-semibold">10.05.2023</span>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
