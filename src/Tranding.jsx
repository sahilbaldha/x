import { IoIosMore } from "react-icons/io";
export const Trending = ({ tranding }) => {
    return (
        <>

            <div className="flex flex-col gap-[15px]  text-white font-bold w-[22rem] border-[1.5px]  border-[#565656] rounded-[12px] ">
                <div className="text-[20px] p-[10px]">What’s happening</div>
                {
                    tranding.map((ele) => {
                        return (
                            <>

                                <div key={ele.key} className="flex flex-col gap-[0.5px] items-start relative hover:bg-[#0a0b0b] p-[10px]">
                                    <div className="text-[#a9a5a5] text-[12px]">{ele.domain}</div>
                                    <div className="text-[15px]">{ele.username}</div>
                                    <div className="text-[#a9a5a5] text-[12px]">{ele.post}</div>
                                    <div className=" group absolute right-[10px] top-[10px] text-[20px] rounded-[50%] hover:bg-[#17202b] duration-[1000] p-[10px] w-fit">
                                        <IoIosMore className="text-[20px] text-[#a9a5a5] group-hover:text-[white]" />
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
                <div className="group hover:bg-[#0a0b0b] rounded-b-[12px] "><button className="text-blue-400 font-bold  group-hover:text-blue-700  p-[10px] ">Show more</button></div>
            </div>

        </>
    )
}