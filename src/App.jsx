import { FaSearch, FaHome, FaRegUserCircle } from "react-icons/fa";
import { IoMdNotifications, IoIosMore } from "react-icons/io";
import { FaRegMessage, FaChessBishop } from "react-icons/fa6";
import { RiGroupLine, RiTwitterXFill } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { Thrid } from "./Thrid";
import { Second } from "./Second";
import { useEffect, useState } from "react";
import { Start } from "./Start";

export const App = () => {


  const sidebarItems = [
    { label: "home", icon: <FaHome /> },
    { label: "explore", icon: <FaSearch /> },
    { label: "notification", icon: <IoMdNotifications /> },
    { label: "message", icon: <FaRegMessage /> },
    { label: "grok", icon: <FaChessBishop /> },
    { label: "communities", icon: <RiGroupLine /> },
    { label: "premium", icon: <RiTwitterXFill /> },
    { label: "profile", icon: <FaRegUserCircle /> },
    { label: "more", icon: <CiCircleMore /> },
  ];

  const [screen, setscreen] = useState(true)

  useEffect(() => {

    setTimeout(() => {

      setscreen(false)

    }, 2000)

  }, [])

  if (screen) {
    return (
      <>
        <Start />
      </>
    )
  }

  return (
    <>

      <div className="flex max-w-[1300px] mx-auto">
        <div className=" md:w-[50%] w-fit frist sticky top-0 h-fit text-[rgba(255,255,255,0.699)]">
          <div className="logo p-[20px]">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[40px] md:w-[32px] invert">
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
          </div>
          <div className="sidebar flex justify-start">
            <ul className="flex flex-col gap-[20px]  text-[30px] md:gap-[10px] md:text-[22px] font-bold capitalize px-[20px]">
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-start items-center  py-[10px] px-[10px] md:py-[2.5px] md:pl-[3px] md:pr-[16px] hover:rounded-[10px] 
                hover:bg-[#181a1d] gap-[15px] w-fit hover:cursor-pointer"
                >
                  {item.icon}
                  <span className="hidden md:block">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="bg-white hidden md:block px-[85px] py-[12px] text-black font-bold rounded-[40px] text-[19px] mt-[10px]">Post</button>
          <div className="hidden md:block">
            <div className="relative hover:bg-[#141313] pl-[10px] pr-[65px] py-[13px] rounded-[50px] font-bold text-white mt-[20px] flex gap-[5px] mr-[5px] items-center w-fit">

              <img className=" w-[50px] h-[50px] rounded-[50%]" src="./public/assets/cricinfo.jpg" alt="" />

              <div className="flex flex-col gap-[2px]">
                <div>Sahil Baldha</div>
                <div className="text-gray-600">@SahilB54410</div>
              </div>
              <IoIosMore className="text-[20px] absolute right-[15px] top-[25px]" />
            </div>
          </div>
        </div>

        <Second />
        <Thrid />
      </div>
    </>
  );
};
