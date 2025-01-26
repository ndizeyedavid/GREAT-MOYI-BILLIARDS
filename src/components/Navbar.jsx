// import { Link } from "react-router-dom";

import { Link, NavLink } from "react-router-dom";
import LanguageDropdown from "../context/LanguageDropdown";

export default function Navbar() {

    // useEffect(() => {
    //     Translator();
    // }, [])

    return (
        <div className="flex items-center justify-between p-4 w-[90%] mx-auto mb-5">
            {/* logo */}
            <div className="w-[80px] h-[70px] cursor-pointer">
                <img src="/assets/logo/transparent/logo.png" className="object-cover w-full h-full transition-all opacity-70 hover:opacity-85" alt="Logo" width={500} height={500} />
            </div>

            {/* links */}
            <nav className="flex gap-[20px] text-[#a29aa9] font-medium text-[16px]">
                <NavLink to="/" className="tranisition-all hover:text-[#cbc1d3]">Home</NavLink>
                <NavLink to="/explore" className="tranisition-all hover:text-[#cbc1d3]">Products</NavLink>
                <NavLink to="/play" className="tranisition-all hover:text-[#cbc1d3]">Play online <span className="rounded-[30px] bg-gradient-to-r from-[#f65239] to-[#b00650] font-medium text-[12px] py-1 px-2">New</span></NavLink>
                <NavLink to="/about" className="tranisition-all hover:text-[#cbc1d3]">Services</NavLink>
                <NavLink to="/contact" className="tranisition-all hover:text-[#cbc1d3]">Contact</NavLink>
            </nav>

            {/* action buttons */}
            <div className="flex items-center gap-5">
                {/* translate option here */}
                <div className="h-[40px] overflow-hidden rounded-md">
                    <LanguageDropdown />
                </div>
                <Link to="/explore" className="px-[15px] py-2 bg-white/5 rounded-md transition-all hover:bg-white/25">Order Now</Link>
            </div>
        </div>
    )
}
