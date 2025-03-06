import { Crown, MoveRight, Verified } from "lucide-react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alert from "../components/Alert"
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import SingleCard from "../components/SingleCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import SimpleLoading from "../components/SimpleLoading"
import CTA from "../components/CTA"
import SideAdvertisment from "../components/SideAdvertisment";
import pb from "../utils/pocketbase";
import DatabaseService from "../services/databaseServices";
import FileService from "../services/fileService";
import { storage } from "../utils/appwrite";

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [ads, setAds] = useState([]);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    useEffect(() => {
        async function fetch_data() {
            const tables = await DatabaseService.listDocuments(import.meta.env.VITE_TABLES_COLLECTION);
            const ads_results = await DatabaseService.listDocuments(import.meta.env.VITE_ADS_COLLECTION);

            setData(tables);
            setAds(ads_results[0]);
        }

        fetch_data()
    }, [])
    return (
        <>
            <SideAdvertisment ads={ads} />

            <Navbar />
            <Container>

                <div className="relative flex flex-col items-center justify-center h-screen">

                    {/* gradient blobs */}
                    <div className="absolute -top-[10px]" id="bg-gradient"></div>

                    {/* illustrations carousel */}
                    <div className="relative top-4 w-full max-w-[900px]">
                        <img src="/assets/illustrations/hero.svg" className="hidden md:block absolute bottom-[-140px] left-0 right-0 w-[900px] h-[350px] animate-float" width={500} height={500} alt="Illustration" />

                        <Slider {...carouselSettings}>
                            <div>
                                <img src="/assets/pool2.webp" className="md:w-full md:h-[400px] object-cover rounded opacity-80 blur-[2px]" alt="Illustration 2" />
                            </div>
                            <div>
                                <img src="/assets/pool3.png" className="md:w-full md:h-[400px] object-cover rounded opacity-80 blur-[2px]" alt="Illustration 2" />
                            </div>
                            <div>
                                <img src="/assets/pool1.jpg" className="md:w-full md:h-[400px] object-cover rounded opacity-80 blur-[2px]" alt="Illustration 2" />
                            </div>
                            {/* Add more slides as needed */}
                        </Slider>
                    </div>

                    {/* hero description */}
                    <div className="flex flex-col z-10 items-center gap-5 md:w-[663px] text-center">
                        <h3 className="md:text-[80px] text-[40px] font-bold leading-[40px] md:leading-[70px]"><span id="gradient">Supercharged</span> Entertainment</h3>

                        <p className="text-white/40">Great Moyi is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.</p>

                        <Link to="/explore" className="px-[15px] py-2 bg-white text-[#0d0d0d] font-medium rounded-md transition-all hover:bg-white/80">Order now anywhere</Link>
                    </div>

                </div>


                {/* Alert */}
                <div className="flex items-center justify-center mt-[105px] md:mt-[205px]">
                    <Alert />
                </div>

                {/* Top Advertisement Section */}

                {/* {console.log(ads)} */}
                {ads.horizontal1 != null &&
                    <div className="flex justify-center w-full my-8">
                        <div className="w-full max-w-[728px] h-[90px] overflow-hidden bg-gray-800/50 rounded-md flex items-center justify-center">
                            <img src={FileService.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, ads.horizontal1)} className="object-cover w-full h-full" alt="Ads" />
                        </div>
                    </div>
                }

                {/* Ad Section */}
                <div className="flex flex-col gap-[96px] items-center justify-center mt-[105px] md:mt-[205px]">

                    <div className="flex flex-col items-center justify-center gap-3 text-center">

                        <h3 className="text-white leading-[30px] text-[30px] md:text-[52px] font-semibold flex flex-col md:flex-row items-center gap-1.5">It's as awesome as <span className="text-[#59d499] flex items-center justify-center gap-1">Winning <Verified className="w-[30px] h-[30px] md:w-[52px] md:h-[52px]" /></span></h3>
                        <p className="text-white/60 md:w-[60%] text-[12px] md:text-[18px] ">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

                    </div>

                    {/* Ad container */}
                    <div id="ad-cont" className="flex flex-col md:flex-row gap-4 items-center  rounded-md p-[20px] md:p-[34px]">
                        <div className="md:w-[40%] flex flex-col gap-[20px]">
                            {/* icon card */}
                            <div className="p-2 rounded-md w-fit h-fit bg-white/30"><Crown className="w-[40px] h-[40px]" /></div>
                            <h3 className="text-[28px] font-semibold">One up the competition</h3>
                            <p className="text-white/45 md:text-[17px] text-[15px]">On top of the core Raycast Extensions already built in, you can install Extensions built by Developers from the community. Everything you've asked for, in one place. Search and browse Extensions for your tools, actions and more.</p>
                        </div>

                        <div className="w-full h-full">
                            <img src="/assets/pool3.png" className="rounded-lg object-cover w-full h-[300px] md:h-[500px]" width={500} height={500} alt="Pool image" />
                        </div>

                    </div>

                </div>

                {/* Mi fun section */}
                <div className="mt-[205px] flex flex-col gap-[96px] items-center justify-center">

                    <div className="flex flex-col items-center justify-center text-center md:w-[60%] gap-3">

                        <h3 className="text-white text-[33px] md:text-[52px] font-semibold leading-[46px] md:leading-[71px]">Where <span className="fun-stuff">Playing</span><br />Meets <span className="fun-stuff">Perfection!</span></h3>
                        <p className="text-white/55">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

                    </div>

                    {/* Pool tables */}

                    {/* lazy loading */}
                    {loading ? <SimpleLoading /> : null}

                    {/* Mid-Page Advertisement */}
                    {ads.horizontal2 != null &&
                        <div className="flex justify-center w-full my-8">
                            <div className="w-full max-w-[970px] h-[250px] overflow-hidden bg-gray-800/50 rounded-md flex items-center justify-center">
                                <img src={FileService.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, ads.horizontal2)} className="object-cover w-full h-full" alt="Ads" />
                            </div>
                        </div>
                    }

                    <div className="grid grid-rows-1 gap-5 md:grid-cols-3">

                        {data.map((value, index) => (
                            <SingleCard key={index} id={value.id} img={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, value.thumbnail)} title={value.title} desc={value.description} price={value.price} />
                        ))}

                    </div>

                    {/* Bottom Advertisement */}
                    {ads.horizontal3 != null &&
                        <div className="flex justify-center w-full my-8">
                            <div className="w-full max-w-[728px] h-[90px] overflow-hidden bg-gray-800/50 rounded-md flex items-center justify-center">
                                <img src={FileService.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, ads.horizontal3)} className="object-cover w-full h-full" alt="Ads" />
                            </div>
                        </div>
                    }

                    <Link to="/explore" className="flex items-center gap-2 hover:gap-4 px-[15px] py-2 bg-white text-[#0d0d0d] font-medium rounded-md transition-all hover:bg-white/80">See More <MoveRight /></Link>

                </div>

                <div className="mt-[60px]">
                    <CTA />
                </div>
            </Container>


            <div className="mt-[100px]">
                <Footer variant="custom" />
            </div>
        </>
    )
}
