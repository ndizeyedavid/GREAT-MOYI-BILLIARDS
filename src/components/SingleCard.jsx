
export default function SingleCard({ img, title, desc }) {
    return (
        <div className="border border-white/5 bg-[#191919]/30 rounded-md overflow-hidden flex flex-col gap-[30px]">
            <img src={img} className="w-full h-[400px] object-cover" width={500} height={500} alt="Pool table" />

            <div className="flex flex-col gap-[10px] p-4">
                <h3 className="text-xl font-medium text-white">{title}</h3>
                <p className="text-white/40 text-[15px]">{desc}</p>
            </div>
        </div>
    )
}
