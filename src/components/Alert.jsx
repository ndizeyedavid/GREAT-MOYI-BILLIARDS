import { Link } from "react-router-dom";

export default function Alert() {
    return (

        <div className="h-fit border-4 border-[#8a1d23] shadow-[0px_0px_20px_3px_#7b1f24] flex justify-between items-center bg-gradient-to-r from-[#ff5b37]/20 to-[#ab0052]/10 rounded-lg w-[778px] p-[21px]">

            <div className="flex flex-col gap-[8.5px]">
                <h3 className="text-xl font-semibold text-white">Customized Moyi Billiards</h3>
                <p className="text-[#ffeef7]/80 font-normal">Exclusive collection of Great moyi modified billiards now available.</p>
            </div>

            <Link to="/explore" className="px-4 py-[7px] bg-gradient-to-r from-[#ff5b37]/30 to-[#ab0052]/40 rounded-lg justify-center items-start gap-[3.59px] inline-flex transition-all hover:opacity-85">Get Yours &#8594;</Link>
        </div>

    )
}
