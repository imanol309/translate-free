import Image from "next/image";
import house from "@/assets/icons/house-solid.svg";
import solid from "@/assets/icons/arrow-right-to-bracket-solid.svg";
import bookmark from "@/assets/icons/bookmark-solid.svg";
import clock from "@/assets/icons/clock-rotate-left-solid.svg";
import download from "@/assets/icons/download-solid.svg";
import file from "@/assets/icons/file-solid.svg";
import headset from "@/assets/icons/headset-solid.svg";

export default function NavBar() {
  const listNavBar = [
    {
      name: "Home",
      icon: house,
    },
    {
      name: "Documents",
      icon: file,
    },
    {
      name: "History",
      icon: clock,
    },
    {
      name: "Downloads",
      icon: download,
    },
    {
      name: "Bookmarks",
      icon: bookmark,
    },
    {
      name: "Support",
      icon: solid,
    },
  ];

  return (
    <main className="flex flex-col w-[17%] h-full border-r border-gray-800">
      <section className="w-full h-[90%] flex flex-col gap-6 justify-start items-center py-10">
        {listNavBar.map((list) => (
          <div
            key={list.id}
            className="w-[70%] flex items-center justify-start gap-4 hover:bg-[#346aff] py-4 pl-5 cursor-pointer rounded-full hover:text-white text-gray-500"
          >
            <Image src={list.icon} alt="" height={18} width={18} />
            <h3 className="  font-medium text-lg">
              {list.name}
            </h3>
          </div>
        ))}
      </section>
      <section className="w-full h-[10%] flex flex-col gap-12 justify-start items-center">
        <div className="w-[70%] flex items-center justify-start gap-4 ">
          <Image src={headset} alt="" height={18} width={18} />
          <h3 className="text-gray-500 font-medium">Log Out</h3>{" "}
        </div>
      </section>
    </main>
  );
}
