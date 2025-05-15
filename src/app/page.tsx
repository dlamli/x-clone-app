import { Feed } from "@/components/Feed/Feed";
import { Shared } from "@/components/Shared/Shared";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-borderGray px-4 pt-4">
        <Link
          href="/"
          className="pb-3 flex justify-center border-b-4 border-iconBlue"
        >
          For you
        </Link>
        <Link href="/" className="pb-3 flex justify-center border-b-4">
          Following
        </Link>
        <Link href="/" className="pb-3 flex justify-center border-b-4">
          React.js
        </Link>
        <Link href="/" className="pb-3 flex justify-center border-b-4">
          Javascript
        </Link>
        <Link href="/" className="pb-3 flex justify-center border-b-4">
          CSS
        </Link>
      </div>
      <Shared />
      <Feed />
    </div>
  );
}
