import { MoveRight } from "lucide-react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SingleCard from "../components/SingleCard"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Explore() {
    return (
        <>
            <Navbar />
            <div className="w-[90%] mx-auto mt-[500px] flex flex-col gap-[96px] h-screen items-center justify-center">

                <div className="flex flex-col items-center justify-center text-center w-[60%] gap-3">

                    <h3 className="text-white text-[52px] font-semibold leading-[71px]">Put the <span className="fun-stuff">Fun</span><br />into <span className="fun-stuff">Fun</span>tastic!</h3>
                    <p className="text-white/55">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

                </div>

                {/* Pool tables */}
                <div className="grid grid-cols-3 gap-5">

                    <SingleCard img="/assets/pool1.jpg" title="4 X 4 pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
                    <SingleCard img="/assets/pool2.webp" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
                    <SingleCard img="/assets/pool3.png" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
                    <SingleCard img="/assets/pool4.jpeg" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
                    <SingleCard img="/assets/pool1.jpg" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
                    <SingleCard img="/assets/pool2.webp" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />

                </div>
            </div>
            <Footer />
        </>
    )
}
