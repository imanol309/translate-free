import house from "@/assets/icons/house-solid.svg";
import solid from "@/assets/icons/arrow-right-to-bracket-solid.svg";
import bookmark from "@/assets/icons/bookmark-solid.svg";
import clock from "@/assets/icons/clock-rotate-left-solid.svg";
import download from "@/assets/icons/download-solid.svg";
import file from "@/assets/icons/file-solid.svg";


const listNavBar = [
  {
    name: "Home",
    icon: house,
    url: "/",
  },
  {
    name: "Documents",
    icon: file,
    url: "/documents",
  },
  {
    name: "History",
    icon: clock,
    url: "/history",
  },
  {
    name: "Downloads",
    icon: download,
    url: "/downloads",
  },
  {
    name: "Bookmarks",
    icon: bookmark,
    url: "/bookmarks",
  },
  {
    name: "Support",
    icon: solid,
    url: "/support",
  },
];

export { listNavBar };
