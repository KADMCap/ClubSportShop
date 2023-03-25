import { Header } from "@/components/Layout/Header";
import Image from "next/image";
import Link from "next/link";
import horseBall from "../public/horse-ball.png";

export default function Custom404() {
  return (
    <div>
      <Header />
      <div className="mt-12 w-full flex flex-col items-center">
        <Image
          className="h-80 w-80"
          src={horseBall}
          alt="horse run with the ball"
        />
        <span className="my-4">Oops... Nothing found</span>
        <button
          type="button"
          className="inline-block rounded bg-darkBlue px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          <Link href="/">Back to main page</Link>
        </button>
      </div>
    </div>
  );
}
