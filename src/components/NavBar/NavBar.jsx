import Image from "next/image";
import headset from "@/assets/icons/headset-solid.svg";
import Link from "next/link";
import { listNavBar } from "@/utils/ListNavbar";

export default function NavBar() {
  return (
    <main className="flex flex-col w-[17%] h-full border-r border-gray-800">
      <section className="w-full h-[90%] flex flex-col gap-6 justify-start items-center py-10">
        {listNavBar?.map((list) => (
          <Link
            key={list.id}
            href={list.url}
            className="w-[70%] font-medium flex items-center justify-start gap-4 hover:bg-green-600 py-4 pl-5 cursor-pointer rounded-full hover:text-white text-gray-500"
          >
            <Image src={list.icon} alt="" height={18} width={18} />
            <h3 className="  font-medium text-lg">{list.name}</h3>
          </Link>
        ))}
      </section>
      <section className="w-full h-[10%] flex flex-col gap-12 justify-start items-center">
        <div className="w-[70%] flex items-center justify-start gap-4 cursor-pointer">
          <Image src={headset} alt="" height={18} width={18} />
          <h3 className="text-gray-500 font-medium">Log Out</h3>{" "}
        </div>
      </section>
    </main>
  );
}
