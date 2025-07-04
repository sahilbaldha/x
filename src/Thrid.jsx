import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { Trending } from "./Tranding";
import { Follow } from "./Follow";
export const Thrid = () => {
    const [input, setInput] = useState("")

    function hadenlchange(event) {

        setInput(event.target.value)
    }

    const tranding = [
        {
            "domain": "Trending in India",
            "username": "#ShefaliJariwala",
            "post": "15.3K posts",
            "key": 1
        },
        {
            "domain": "Trending in India",
            "username": "शेफाली जरीवाला",
            "post": "5,563 posts",
            "key": 2
        }, {
            "domain": "Trending in India",
            "username": "#ADDAxEST",
            "post": "42.8K posts",
            "key": 3
        }, {
            "domain": "Only on X · Trending",
            "username": "#ซ้อก้าด",
            "post": "224K posts",
            "key": 4
        },
    ]

    return (
        <>

            <div className="xs:hidden md:block flex flex-col gap-[25px] items-start px-[20px] pt-[10px] w-fit">
                <div className="sticky top-0 z-10 bg-black backdrop-blur-md  py-[10px]">
                    <div className="relative w-fit">
                        <CiSearch className="invert absolute left-[8px] top-[9px] text-[20px]" />
                        <input onChange={hadenlchange} value={input} type="text" className={`w-[22rem] h-[40px] pl-[32px] rounded-[18px] bg-black text-white capitalize outline-none border-[1.5px] ${input ? "border-blue-500" : "border-[#565656]"
                            }`} placeholder="Search" />
                    </div>
                </div>
                <div className="flex flex-col gap-[15px]  text-white font-bold w-[22rem] border-[1.5px] p-[10px] border-[#565656] rounded-[12px]">
                    <div className="text-[20px] ">
                        Subscribe to Premium
                    </div>
                    <div className="text-[15px]">
                        Subscribe to unlock new features and if eligible, receive a share of revenue.
                    </div>
                    <div>
                        <button className="p-[7px_25px] bg-blue-500 hover:bg-blue-700 border-none rounded-[15px] ">Subscribe</button>
                    </div>
                </div>
                <Trending tranding={tranding} />
                <Follow />
                <div className=" sticky top-[67vh] flex flex-col gap-[5px]  text-[#565656] font-bold w-[22rem] text-[14px]">
                    <div className="flex gap-[1.5px] ">
                        <div className="hover:cursor-pointer hover:underline">Terms of Service&nbsp;&nbsp;|</div>
                        <div className="hover:cursor-pointer hover:underline">Privacy Policy&nbsp;&nbsp;|</div>
                        <div className="hover:cursor-pointer hover:underline">Cookie Policy&nbsp;&nbsp;|</div>
                    </div>
                    <div className="flex gap-[5px]">
                        <div className="hover:cursor-pointer hover:underline">More...</div>
                        <div className="hover:cursor-pointer hover:underline">© 2025 X Corp.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
