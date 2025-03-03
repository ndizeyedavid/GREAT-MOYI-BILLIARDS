
import Navbar from "../components/Navbar";
import SingleCard from "../components/SingleCard"
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import SimpleLoading from "../components/SimpleLoading";
import scrollToTop from "../context/scrollToTop";
import pb from "../utils/pocketbase";
import SideAdvertisment from "../components/SideAdvertisment";

export default function Explore() {

    const [data, setData] = useState([]);
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetch_data() {
            setLoading(true);
            const results = await pb.collection("tables").getFullList();
            const ads_results = await pb.collection("ads").getFullList();
            setData(results);
            setAds(ads_results[0]);
            setLoading(false);
        }
        fetch_data();
    }, [])

    scrollToTop();

    return (
        <>
            <SideAdvertisment ads={ads} />
            <Navbar />
            <div className="w-[75%] mx-auto mt-[100px] flex flex-col gap-[96px] items-center justify-center">

                <div className="flex flex-col items-center justify-center text-center md:w-[60%] gap-3">

                    <h3 className="text-white text-[42px] md:text-[52px] font-semibold leading-[71px]">Put the <span className="fun-stuff">Fun</span><br />into <span className="fun-stuff">Fun</span>tastic!</h3>
                    <p className="text-white/55">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

                </div>

                {/* Pool tables */}

                {/* lazy loading */}

                {loading ? <SimpleLoading /> : null}

                <div className="grid grid-rows-1 gap-5 md:grid-cols-3">

                    {data.map((value, index) => (
                        <SingleCard key={index} id={value.id} img={pb.files.getURL(value, value.thumbnail)} title={value.title} desc={value.description} price={value.price} />
                    ))}

                </div>
            </div>
            <div className="mt-[100px]"><Footer variant="custom" /></div>
        </>
    )
}
