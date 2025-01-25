import Email from "/assets/icons/email.svg";
// import Test from "/assets/users/male-1.svg";
export default function TeamCard({ image, name, qualification }) {
    return (
        <div className="p-10 bg-white rounded-[10px] shadow-[4px_4px_0px_1px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start items-start gap-6 inline-flex overflow-hidden">

            {/* Teacher profile✅ */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                    {/* image✅ */}
                    <img src={image} className="w-[80px] h-w-[80px] rounded-[10px] border-2 border-neutral-800" alt="Person" />
                    <h3 className="text-[#333333] text-2xl font-extrabold leading-9">{name}</h3>
                </div>

                <button className="bg-[#ffdecc] rounded-md border-2 border-neutral-800 p-2 transition-all hover:shadow-[2px_2px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_3px_0px_rgba(30,30,30,1.00)]">
                    <img src={Email} alt="Email" />
                </button>
            </div>

            {/* qualifications✅ */}
            <div className="p-6 bg-[#fff5ef] rounded-[10px] border-2 border-neutral-800 w-full">
                <h3 className="text-[#333333] text-xl font-semibold leading-[30px]">Qualification: {qualification}</h3>
            </div>
        </div>
    )
}
