
// Another card! WHY🤬🤬🤬

export default function AdmissionCard({ step, title, details }) {
    return (
        <div>
            <div className="flex flex-col items-center w-fit">
                <div className="w-[100px] h-[100px] flex items-center justify-center  bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800">
                    <div className="text-[#191919] text-6xl font-extrabold  leading-[78px]">{step}</div>
                </div>

                {/* This shit was difficult to create, and guess what? If it works, don't touch it. So beware buddy☢️ */}
                <div className="relative h-[69px] px-1 bg-[#ffbe99] justify-center items-center gap-2.5 inline-flex">
                    <hr className="h-full border-2 border-black rounded-xl" />
                    <div className="absolute top-[-12px] w-5 h-5 bg-white border-2 rounded-full border-neutral-800" />
                </div>

            </div>
            <div className="h-fit lg:h-[330px] p-[50px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex flex-col gap-5">
                <h2 className="text-[#191919] text-[40px] font-bold leading-[52px]">{title}</h2>
                <p className="text-[#4c4c4c] text-md font-medium leading-[30px]">{details}</p>
            </div>
        </div>
    )
}
