export const Follow = () => {

    const followuser = [
        {
            img_url: "/assets/cricinfo.jpg",
            usename: "cricviz",
            id: "@cricviz",
            key: 1
        },
        {
            img_url: "/assets/hritik roson.jpg",
            usename: "Hrithik Roshan",
            id: "@HrithikRoshan",
            key: 2
        }, {
            img_url: "/assets/gill.jpg",
            usename: "Shubman Gill",
            id: "@ShubmanGill",
            key: 3
        },


    ]
    return (
        <>

            <div className=" sticky top-[12vh] flex flex-col border-[1.5px] border-[#565656] rounded-[12px] font-bold text-white w-[22rem] gap-[15px] capitalize ">
                <div className="p-[10px]">Who to follow</div>
                {
                    followuser.map((ele) => {

                        return (
                            <>
                                <div key={ele.key} className="flex flex-row relative gap-[1.5px] hover:bg-[#0a0b0b] p-[10px]">
                                    <div><img className=" w-[50px] h-[50px] rounded-[50%]" src={ele.img_url} /></div>
                                    <div className="pl-[1px] flex flex-col gap-[0.5px] ">
                                        <div className="flex flex-row gap-[1px] items-center ">
                                            <div className="hover:underline">{ele.usename}</div>

                                            <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" fill="#3b82f6" class=" w-[22px] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>

                                        </div>
                                        <div className="text-[#565656]">{ele.id}</div>
                                    </div>
                                    <div><button className="  absolute right-[10px] top-[16.5px]   px-[18px] py-[5px] bg-white text-black rounded-[40px]">Follow</button></div>
                                </div>
                            </>
                        )
                    })
                }
                <div className="group hover:bg-[#0a0b0b] rounded-b-[12px]"><button className="text-blue-400 font-bold  group-hover:text-blue-700  p-[10px] ">Show more</button></div>
            </div>
        </>
    )
}