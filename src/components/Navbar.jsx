// import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 w-[90%] mx-auto mb-5">
            {/* logo */}
            <div className="w-[70px] h-[70px] cursor-pointer">
                <img src="/assets/logo/transparent/logo.png" className="object-cover w-full h-full transition-all opacity-70 hover:opacity-85" alt="Logo" width={500} height={500} />
            </div>

            {/* links */}
            <nav className="flex gap-[20px] text-[#a29aa9] font-medium text-[16px]">
                <a href="#" className="tranisition-all hover:text-[#cbc1d3]">Home</a>
                <a href="#" className="tranisition-all hover:text-[#cbc1d3]">Store</a>
                <a href="#" className="tranisition-all hover:text-[#cbc1d3]">Services</a>
                <a href="#" className="tranisition-all hover:text-[#cbc1d3]">Contact</a>
                <a href="#" className="tranisition-all hover:text-[#cbc1d3]">Explore</a>
                <a href="#" className="tranisition-all hover:text-[#cbc1d3]">Blog</a>
            </nav>

            {/* action buttons */}
            <div className="flex gap-5">
                <button className="px-[15px] py-2 bg-white/5 rounded-md transition-all hover:bg-white/25">Order Now</button>
            </div>
        </div>
    )
}
