import { IoMdPhotos } from "react-icons/io";
import { MdOutlineGifBox, MdEmojiEmotions } from "react-icons/md";
import { FaChessBishop } from "react-icons/fa6";
import { LiaPollHSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { LuMessageSquareReply } from "react-icons/lu";
import { BiRepost } from "react-icons/bi";
import { CiHeart, CiBookmark, CiSaveDown1 } from "react-icons/ci";
import { MdReviews } from "react-icons/md";


import { useState } from "react";

export const Second = () => {
    const [show, setShow] = useState(false)
    const icon = [
        { icons: <IoMdPhotos /> },
        { icons: <MdOutlineGifBox /> },
        { icons: <FaChessBishop /> },
        { icons: <LiaPollHSolid /> },
        { icons: <MdEmojiEmotions /> },
        { icons: <IoLocationOutline /> },
        { icons: <SlCalender /> }
    ];

    const icon2 = [
        {
            icons: <LuMessageSquareReply />,
            value: "43",
        },
        {
            icons: <BiRepost />,
            value: "48",
        },
        {
            icons: <CiHeart />,
            value: "1.3k",
        },
        {
            icons: <MdReviews />,
            value: "21k",
        },
        {
            icons: <CiBookmark />,
            value: null,
        },
        {
            icons: <CiSaveDown1 />,
            value: null,
        },
    ];

    const data = [

        {
            show: "./public/assets/img4.jpg",
            username: "🦋ritika🦋",
            id: "@ritika725189",
            contant: "  Jai Jaganath puri ji🚩 ⭕‼️⭕ 🙌",
            time: "12h",
            show1: "./public/assets/img4.0.jpg"

        },

        {
            show: "./public/assets/img1.jpg",
            username: "johns.",
            id: "@CricCrazyJohns",
            contant: "MOST HUNDREDS FOR INDIA IN WTC HISTORY: Shubman Gill - 7* (62 Innings)",
            time: "14h",
            show1: "./public/assets/img2.0.jpg"


        },
        {
            show: "./public/assets/img3.jpg",
            username: "VAIDIC BHARAT",
            id: "@vaidic_1",
            contant: "Not all warriors wear armor. Some wear sarees and carry milk pots. Meet Hirkani – the mother who defied a mountain for her child.",
            time: "21h",
            show1: "./public/assets/img3.0.jpg"

        },
        {
            show: "./public/assets/img2.jpg",
            username: "ESPNcricinfo",
            id: "@ESPNcricinfo",
            contant: "The captain delivered a masterclass in control and accountability, standing tall amid the team's various tactical tangles, writes Sid Monga ✍️ ",
            time: "22h",
            show1: "./public/assets/img1.0.jpg"

        },
    ]


    function handelclick() {
        setShow(true)
    }
    return (
        <>
            <div className="second w-full border-[2px] border-x-[#565656]  border-y-black">
                <div className=" sticky top-0 z-10 backdrop-blur-[15px]">
                    <div className=" relative flex capitalize text-white font-bold ">
                        <div className=" absolute bottom-0 left-[18%] w-[60px] h-[3px] bg-blue-500 rounded-[10px]">
                        </div>
                        <div className="w-1/2 text-center hover:bg-[#0a0b0b] py-[13px]">for you</div>
                        <div className="w-1/2 text-center hover:bg-[#0a0b0b] py-[13px]">following</div>
                    </div>
                </div>
                <div className="h-[1px] w-full bg-[gray]"></div>
                <div className="flex flex-col gap-[10px] p-[10px]">
                    <div className="flex gap-[10px]">
                        <img className=" w-[50px] h-[50px] rounded-[50%]" src="./public/assets/cricinfo.jpg" alt="" />
                        <input onClick={handelclick} className="w-full bg-black text-white font-bold outline-none text-[18px]" type="text" placeholder="What's happening?" />
                    </div>
                    <div className={`${show ? "block" : "hidden"} flex flex-col gap-[2px] pl-[25px]`}>
                        <div className=" text-blue-600 font-bold">Everyone can reply</div>
                        <div className=" w-full h-[1px] bg-[gray]"></div>
                    </div>
                    <ul className="flex  h-[45px] items-center relative " >
                        {
                            icon.map((ele) => {
                                return (
                                    <>
                                        <li className="text-blue-600  text-[17px] p-[8px] rounded-[17px] md:text-[20px] md:p-[10px] md:rounded-[20px] hover:bg-[#141415]">{ele.icons}</li>
                                    </>
                                )
                            })
                        }
                        <button className=" absolute right-[10px] top-[10px] w-fit px-[15px] py-[5px] bg-[#b6b6b6] rounded-[20px] text-black font-bold">post</button>
                    </ul>
                </div>

                {
                    data.map(ele => {
                        return (
                            <>
                                <div className=" relative font-bold text-white">
                                    <img className="  absolute top-[10px] left-[10px] w-[50px] h-[50px] rounded-[50%] " src={ele.show1} alt="" />
                                    <div className=" w-[100%] h-[1px] bg-[gray]"></div>
                                    <div className="flex flex-col gap-[10px] pl-[65px] pt-[10px] pr-[15px]">
                                        <div className="flex gap-[2.5px] ">
                                            <span>{ele.username}</span>
                                            <span className="text-[gray]">{ele.id}</span>
                                            <svg aria-label="Verified account" role="img" fill="#3b82f6" className=" w-[22px] h-[22px] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
                                            <span className="text-[gray]">•{ele.time}</span>
                                        </div>
                                        <div>{ele.contant}
                                        </div>
                                        <div className="flex justify-start">
                                            <img className=" rounded-[20px] h-[344px] object-contain " src={ele.show} alt="" />
                                        </div>
                                        <div className="flex gap-[10px] mb-[10px]">

                                            {icon2.map((item, index) => (
                                                <div key={index} className="flex items-center  text-[gray] hover:text-red-500">
                                                    <div className=" text-[17px] md:text-[25px] p-[7px] md:p-[10px]  rounded-[17px] md:rounded-[20px] hover:bg-[#141415] "> {item.icons}
                                                    </div>
                                                    {item.value !== null && <span className=" text-[12px] md:text-[15px] ml-[-5px]">{item.value}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
                <div className="h-[1px] w-full bg-[gray] mb-[2px]"></div>
            </div>
        </>
    )
}

