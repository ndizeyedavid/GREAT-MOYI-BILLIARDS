import { MoveRight } from "lucide-react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import SingleCard from "../components/SingleCard"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Explore() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/data/products.json').then((response) => {
            const data = response.data;
            // console.log(data)
            setData(data);
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className="w-[90%] mx-auto mt-[100px] flex flex-col gap-[96px] items-center justify-center">

                <div className="flex flex-col items-center justify-center text-center w-[60%] gap-3">

                    <h3 className="text-white text-[52px] font-semibold leading-[71px]">Put the <span className="fun-stuff">Fun</span><br />into <span className="fun-stuff">Fun</span>tastic!</h3>
                    <p className="text-white/55">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

                </div>

                {/* Pool tables */}
                <div className="grid grid-cols-3 gap-5">

                    {data.map((value, index) => (
                        <SingleCard key={index} img={value.thumbnail} title={value.title} desc={value.description} price={value.price} id={index} />
                    ))}

                </div>
            </div>
            <div className="mt-[100px]"><Footer variant="custom" /></div>
        </>
    )
}
