// import { Link } from "react-router-dom";

import { Link, NavLink, useNavigate } from "react-router-dom";
import LanguageDropdown from "../context/LanguageDropdown";
import { LineChart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const links = [
        {
            path: "/",
            text: "Home",
            label: ""
        },
        {
            path: "/explore",
            text: "Explore",
            label: ""
        },
        {
            path: "/play",
            text: "Play Online",
            label: "New"
        },
        {
            path: "/news",
            text: "News",
            label: ""
        },
        {
            path: "/about",
            text: "Services",
            label: ""
        },
        {
            path: "/contact",
            text: "Contact",
            label: ""
        },
    ]

    return (
        <div className="flex items-center justify-between p-4  w-[90%] mx-auto mb-5">
            {/* logo */}
            <div onClick={() => navigate("/")} className="w-[80px] h-[70px] cursor-pointer">
                <img src="/assets/logo/transparent/logo.png" className="object-cover w-full h-full transition-all opacity-70 hover:opacity-85" alt="Logo" width={500} height={500} />
            </div>

            {/* links */}
            <nav className="gap-[20px] text-[#a29aa9] font-medium text-[16px] hidden md:flex">
                {links.map((link, index) => (
                    // <NavLink key={index} to={link.path} className="tranisition-all hover:text-[#cbc1d3]">{link.text}</NavLink>
                    link.label === "" ? <NavLink key={index} to={link.path} className="tranisition-all hover:text-[#cbc1d3]">{link.text}</NavLink> : <NavLink key={index} to={link.path} className="tranisition-all hover:text-[#cbc1d3]">{link.text} <span className="rounded-[30px] bg-gradient-to-r from-[#f65239] to-[#b00650] font-medium text-[12px] py-1 px-2">{link.label}</span></NavLink>
                ))}
            </nav>

            {/* action buttons */}
            <div className="flex items-center gap-5">
                {/* translate option here */}
                <div className="h-[40px] overflow-hidden rounded-md">
                    <LanguageDropdown />
                </div>
                <Link to="/explore" className="hidden md:block px-[15px] py-2 bg-white/5 rounded-md transition-all hover:bg-white/25">Order Now</Link>

                <button onClick={() => setOpen(!open)} className="md:hidden px-[15px] py-2 bg-white/5 rounded-md transition-all hover:bg-white/25"><Menu /></button>
            </div>

            {open ?
                <div className="absolute right-3 flex flex-col bg-black rounded-md shadow-lg top-[70px]">
                    <NavLink to="/" className="tranisition-all z-50 p-1 hover:text-[#cbc1d3]">Home</NavLink>
                    <NavLink to="/explore" className="tranisition-all z-50 p-1 hover:text-[#cbc1d3]">Products</NavLink>
                    <NavLink to="/play" className="tranisition-all z-50 p-1 hover:text-[#cbc1d3]">Play online <span className="rounded-[30px] bg-gradient-to-r from-[#f65239] to-[#b00650] font-medium text-[12px] py-1 px-2">New</span></NavLink>
                    <NavLink to="/about" className="tranisition-all z-50 p-1 hover:text-[#cbc1d3]">Services</NavLink>
                    <NavLink to="/contact" className="tranisition-all z-50 p-1 hover:text-[#cbc1d3]">Contact</NavLink>
                </div>

                :

                null
            }

        </div>
    )
}
