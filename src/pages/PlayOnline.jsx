import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import pb from "../utils/pocketbase";
import SideAdvertisment from "../components/SideAdvertisment";
import DatabaseService from "../services/databaseServices";

export default function PlayOnline() {

    const [ads, setAds] = useState([]);

    useEffect(() => {
        async function fetch_ads() {
            const results = await DatabaseService.listDocuments(import.meta.env.VITE_ADS_COLLECTION);

            setAds(results[0]);
        }

        fetch_ads();
    }, []);

    return (
        <>
            <SideAdvertisment ads={ads} />
            <NavBar />

            <div className="md:w-[60%] w-[90%] mx-auto mt-[70px] mb-[90px]">
                <div className="">
                    <h3 className="text-[50px] font-medium">Play</h3>
                    <p className="text-xl font-normal text-white/80">Level up your skills with our online playground</p>
                </div>

                <div className="mt-[50px] rounded-lg overflow-hidden border border-white/10 flex flex-col gap-5">
                    <div className="w-full h-[500px] thumbnail">
                        <iframe src="https://www.onlinegames.io/games/2022/unity3/8-ball-pool-billiard/index.html" className="w-full h-full overflow-hidden rounded-md" frameborder="0"></iframe>
                    </div>
                    {/* <img src="/assets/pool1.jpg" className="w-full h-[500px] object-cover" width={500} height={500} alt="Game Preview" /> */}

                    <div className="p-2 space-y-4">
                        <h3 className="text-xl font-semibold">8 ball poll billiard</h3>
                        <p className="text-base font-normal text-white/80">A game by Freenova.games</p>
                    </div>

                </div>

            </div>

            <Footer variant="custom" />
        </>
    )
}
