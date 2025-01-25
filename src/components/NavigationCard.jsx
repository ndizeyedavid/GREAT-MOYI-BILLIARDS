import { Link } from "react-router-dom";

export default function NavigationCard({ href, title, details }) {
    return (
        <div className="p-12 w-full bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start items-center gap-[40px] inline-flex overflow-hidden">

            <h3 className="text-center text-[#191919] w-full text-5xl font-bold leading-[62.40px]">{title}</h3>

            {/* Illustration✅ */}
            <div className="h-5 justify-start items-center gap-2.5 inline-flex w-full">
                <div className="flex items-center justify-start h-5 grow shrink basis-0">
                    <div className="w-5 h-5 bg-white border-2 rounded-full border-neutral-800" />
                    <div className="grow shrink basis-0 h-3 pr-1.5 py-1.5 bg-[#ffbe99] justify-center items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 h-[0px] border-2 border-black"></div>
                    </div>
                </div>
                <div className="grow shrink basis-0 h-3 pr-1.5 py-1.5 bg-[#ffbe99] justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 h-[0px] border-2 border-black"></div>
                </div>
                <div className="grow shrink basis-0 h-3 pr-1.5 py-1.5 bg-[#ffbe99] justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 h-[0px] border-2 border-black"></div>
                </div>
                <div className="grow shrink basis-0 h-3 pr-1.5 py-1.5 bg-[#ffbe99] justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 h-[0px] border-2 border-black"></div>
                </div>
                <div className="grow shrink basis-0 h-3 pr-1.5 py-1.5 bg-[#ffbe99] justify-center items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 h-[0px] border-2 border-black"></div>
                </div>
                <div className="flex items-center justify-start h-5 grow shrink basis-0">
                    <div className="grow shrink basis-0 h-3 pr-1.5 py-1.5 bg-[#ffbe99] justify-center items-center gap-2.5 flex">
                        <div className="grow shrink basis-0 h-[0px] border-2 border-black"></div>
                    </div>
                    <div className="w-5 h-5 bg-white border-2 rounded-full border-neutral-800" />
                </div>
            </div>

            <p className="text-center text-[#4c4c4c] text-xl font-medium leading-[30px]">{details}</p>

            {/* TODO: Left icon */}
            <Link to={href} className="mt-[25px] py-[18px] bg-[#ffdecc] rounded-[10px] transition-all hover:shadow-[3px_3px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_0px_0px_rgba(30,30,30,1.00)] border-2 border-neutral-800 justify-center items-center gap-2.5 inline-flex overflow-hidden w-full">
                <span className="text-center text-[#333333] text-xl font-medium leading-[30px]">Learn More ➡️</span>
            </Link>

        </div>
    )
}
