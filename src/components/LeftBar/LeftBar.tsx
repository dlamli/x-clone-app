import Link from "next/link";

import { MENU_LIST } from "@/constants/data";
import { IoImage } from "../IoImage/IoImage";

const LeftBar = () => {
  return (
    <section className="h-screen sticky top-0 pt-2 pb-8 flex flex-col justify-between">
      {/* Logo Menu Button */}
      <section className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO*/}
        <Link href="/" className="p-2 hover:bg-hoverMenuList">
          <IoImage src="icons/logo.svg" alt="Logo" w={24} h={24} />
        </Link>
        {/* Menu List */}
        <div className="flex flex-col gap-4">
          {MENU_LIST.map((m) => (
            <Link
              className="p-2 rounded-full hover:bg-hoverMenuList flex items-center gap-4"
              href={m.link}
              key={m.id}
            >
              <IoImage src={`icons/${m.icon}`} alt={m.name} w={24} h={24} />
              <span className="hidden xxl:inline">{m.name}</span>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href="/"
          className="bg-white text-black rounded-full font-bold size-12 flex items-center justify-center xxl:hidden"
        >
          <IoImage src="icons/post.svg" alt="New Post" w={24} h={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </section>
      {/* User Information */}
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-10 relative rounded-full overflow-hidden">
            <IoImage
              src="/general/avatar.png"
              alt="Avatar"
              w={100}
              h={100}
              tr={true}
              fill
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">User</span>
            <span className="text-sm text-textGray">@user</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </section>
    </section>
  );
};

export default LeftBar;
