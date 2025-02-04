import { Crown, MoveRight, Verified } from "lucide-react"
import Alert from "../components/Alert"
import Container from "../components/Container"
import Navbar from "../components/Navbar"
import SingleCard from "../components/SingleCard"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import SimpleLoading from "../components/SimpleLoading"

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data/products.json').then((response) => {
            setLoading(false);
            const data = response.data;
            setData(data);
        })
    }, [])
    return (
        <>
            {/* MAin body section container */}
            <Navbar />
            <Container>

                <div className="relative flex flex-col items-center justify-center h-screen">

                    {/* gradient blobs */}
                    <div className="absolute -top-[10px]" id="bg-gradient"></div>

                    {/* illustrations */}
                    <div className="relative top-4">
                        <img src="/assets/illustrations/hero.svg" className="hidden md:block absolute bottom-[-140px] left-0 right-0 w-[900px] opacity-80 h-[350px]" width={500} height={500} alt="Illustration" />
                        <img src="/assets/pool3.png" className="md:w-[600px] md:h-[300px] object-cover rounded opacity-80 blur-[2px]" width={500} height={500} alt="Illustration" />
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


                    <div className="grid grid-rows-1 gap-5 md:grid-cols-3">

                        {data.map((value, index) => (
                            <SingleCard key={index} img={value.thumbnail} title={value.title} desc={value.description} price={value.price} id={index} />
                        ))}

                    </div>

                    <Link to="/explore" className="flex items-center gap-2 hover:gap-4 px-[15px] py-2 bg-white text-[#0d0d0d] font-medium rounded-md transition-all hover:bg-white/80">See More <MoveRight /></Link>

                </div>
            </Container>

            <div className="mt-[100px]">
                <Footer variant="custom" />
            </div>
        </>
    )
}
