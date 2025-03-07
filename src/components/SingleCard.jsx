import { Link } from "react-router-dom";

export default function SingleCard({ img, title, desc, price, id }) {
    return (
        <div className="border border-white/5 bg-[#191919]/30 rounded-md overflow-hidden flex flex-col gap-[10px]">
            <div className="w-full h-[400px] overflow-hidden">
                <img src={img} className="object-cover w-full h-full transition-all hover:scale-105 aspect-square" width={500} height={500} alt="Pool table" />
            </div>

            <div className="flex flex-col gap-[10px] p-4">
                <h3 className="text-xl font-medium text-white">{title}</h3>
                <span className="text-xl text-blue-400">{price.toLocaleString()} RWF</span>
                <p className="text-white/40 text-[15px]">{desc}</p>
            </div>

            <div className="px-3 py-3 mb-3">
                <Link to={"/explore/" + id} className="px-[15px] py-2 mb-2 bg-white text-[#0d0d0d] font-medium rounded-md transition-all hover:bg-white/80">More details</Link>
            </div>

        </div>
    )
}
