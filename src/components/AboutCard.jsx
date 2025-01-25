// import Test from "/assets/icons/binocular.svg";

export default function AboutCard({ icon, title, details }) {
    return (
        <div className="h-fit lg:h-[450px] p-[60px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start items-start gap-[60px] inline-flex overflow-hidden">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-[#191919] text-5xl font-bold leading-[62.40px]">{title}</h1>

                {/* icon */}
                <div>
                    <img src={icon} />
                </div>
            </div>

            <p className="text-[#333333] text-lg font-medium leading-[30px]">{details}</p>
        </div>
    )
}
