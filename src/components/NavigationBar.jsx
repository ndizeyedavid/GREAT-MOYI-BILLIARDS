import { NavLink } from "react-router-dom"
// import Logo from "../assets/Logo-lg.svg"
import Logo from "/assets/logo/Logo-lg.svg"
import { useState } from "react"
// import "./NavigationBar.module.css"

const NavigationBar = () => {
  // const [openNav, SetOpenNav] = useState(true);
  return (

    // TODO: responsiveness⚠️
    <section className=" w-[98%] mx-auto">
      <nav className="flex flex-row items-center justify-between h-20 mt-4 overflow-hidden border-2 border-black rounded-xl">

        {/* TODO: Responsive links */}
        <div className="relative h-full">
          <NavLink to="/" id="logo" className="h-full bg-primary-65 border-l-2 border-r-2 border-neutral-800 justify-start items-center gap-2.5 inline-flex w-full sm:w-fit lg:rounded-[10px_0_0_10px]" style={{ borderRadius: "" }}>
            <div className="flex items-center justify-center w-full h-full">
              <div className="relative flex items-center justify-center w-full h-10">
                <img src={Logo} alt="Logo" className="w-full h-full md:object-cover object-fit" />
              </div>
            </div>
          </NavLink>

        </div>

        {/* links✅ */}
        <div className="items-center self-stretch justify-start hidden lg:flex">
          <NavLink to="/" className="self-stretch px-[24px] py-5  border-l-2 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-white lg:text-neutral-800 text-xl font-medium font-mono leading-[30px]">Home</div>
          </NavLink>
          <NavLink to="/about" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-white lg:text-neutral-800 text-xl font-medium font-mono leading-[30px]">About Us</div>
          </NavLink>
          <NavLink to="/academics" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-white lg:text-neutral-800 text-xl font-medium font-mono leading-[30px]">Academics</div>
          </NavLink>
          <NavLink to="/admissions" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-white lg:text-neutral-800 text-xl font-medium font-mono leading-[30px]">Admissions</div>
          </NavLink>
          <NavLink to="/students" className="self-stretch px-[24px] py-5 border-r-2 border-neutral-800 justify-start items-center gap-2.5 flex hover:bg-primary-90">
            <div className="text-white lg:text-neutral-800 text-xl font-medium font-mono leading-[30px]">Student Life</div>
          </NavLink>
          <NavLink to="/contact" className="self-stretch px-[24px] py-5 bg-primary-70 border-neutral-800 justify-start items-center gap-2.5 flex" style={{ borderRadius: "0 10px 10px 0" }}>
            <div className="text-neutral-800 text-xl font-medium font-mono leading-[30px]">Contact</div>
          </NavLink>
        </div>

        <button className="h-full px-[30px] bg-[#ffeee5] border-l-2 border-neutral-800 text-neutral-800 lg:hidden">
          <span className="text-2xl font-medium font-mono leading-[30px]">=</span>
        </button>
      </nav>


    </section>

  )
}

export default NavigationBar
