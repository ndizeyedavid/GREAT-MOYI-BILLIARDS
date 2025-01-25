import { Link } from "react-router-dom";
import Logo from "/assets/logo/Logo-lg.svg";

// icons
import Email from "/assets/icons/email.svg"
import Phone from "/assets/icons/phone.svg"
import Location from "/assets/icons/location.svg"
import Facebook from "/assets/icons/facebook.svg"
import Twitter from "/assets/icons/twitter.svg"
import LinkedIn from "/assets/icons/linkedin.svg"

export default function Footer() {
  return (
    <footer className="mt-[200px] w-full px-[50px] py-[40px] mb-10 bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800 flex-col justify-start items-start gap-[50px] flex overflow-hidden">
      <div className="flex flex-col w-full gap-10 text-center lg:text-start lg:flex-row">

        {/* LEFT SIDE✅ */}
        <div className="flex flex-col gap-[50px] ">
          {/* Logo here */}
          <div className="flex flex-col gap-[10px] w-full">
            <Link to="/"><img src={Logo} className="object-cover w-full" alt="School Logo" /></Link>
            <p className="text-text-20 text-xl font-medium leading-[30px] w-full">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          </div>


          {/* Social address */}
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-center gap-2">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img alt="icon" src={Email} />
              </span>
              <p>Hellow@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img alt="icon" src={Phone} />
              </span>
              <p>+250 796 140 857</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-10 p-2 bg-[#fff5ef] rounded-md border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex">
                <img alt="icon" src={Location} />
              </span>
              <p>Kigali, Kanombe</p>
            </div>
          </div>

        </div>

        {/* Easy Links */}
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-y-5">

          {/* col 1 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">Home</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="/#features" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Features</a></li>
              <li><a href="/#testimonials" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Our Testimonials</a></li>
              <li><a href="/#faq" className="footer-link text-[#333333] text-md font-medium leading-[30px]">FAQ</a></li>
            </ul>
          </div>


          {/* col 2 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">Academics</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="/academics#special-features" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Special Features</a></li>
              <li><a href="/academics#gallery" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Gallery</a></li>
            </ul>
          </div>

          {/* col 3 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">About</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="/about#mission-vision" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Our Mission</a></li>
              <li><a href="/about#mission-vision" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Our Vision</a></li>
              <li><a href="/about#awards" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Awards and Recognition</a></li>
              {/* <li><a href="/about#history" className="footer-link text-[#333333] text-md font-medium leading-[30px]">History</a></li> */}
              <li><a href="/about#teachers" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Teachers</a></li>
            </ul>
          </div>

          {/* col 4 */}
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-xl font-bold text-neutral-800">Contact Us</h3>
            <ul className="flex flex-col gap-[10px]">
              <li><a href="/contact#information" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Information</a></li>
              <li><a href="/contact#direction" className="footer-link text-[#333333] text-md font-medium leading-[30px]">Map & Direction</a></li>
            </ul>
          </div>



        </div>

      </div>

      {/* semi-bottom */}
      <div className="w-full flex flex-col gap-[24px]">
        <hr className="h-[1px] w-full rounded-full border border-neutral-500" />

        <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row">

          {/* 💌💘💝💖💗💓 Huge thanks💌💘💝💖💗💓 */}
          <div>
            <span>Huge thanks to <Link to="https://figma.com/@praha" target="_blank" className="font-semibold text-primary-65">Pragadesh</Link> for the inspiration</span>
          </div>
          {/* 💌💘💝💖💗💓 Huge thanks💌💘💝💖💗💓 */}

          {/* Social links✅ */}

          {/* valid links and online icons */}
          <div className="flex flex-row items-center gap-3">
            <Link to="#" target="_blank" className="h-13 p-3 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link to="#" target="_blank" className="h-13 p-3 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
              <img src={Twitter} alt="Facebook" />
            </Link>
            <Link to="#" target="_blank" className="h-13 p-3 bg-[#ffdecc] rounded-lg border-2 border-neutral-800 justify-start items-start gap-2.5 inline-flex transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">
              <img src={LinkedIn} alt="Facebook" />
            </Link>
          </div>
        </div>

        <hr className="h-[1px] w-full rounded-full border mt-3 border-neutral-300" />

        {/* Copyright✅ */}
        <span className="text-center text-[#646467] text-lg font-medium leading-[27px]">Copyright © 2024 <Link to="" className="font-bold hover:text-primary-70">ESSA Nyarugunga</Link>. All rights reserved.</span>

      </div>
    </footer>
  )
}
