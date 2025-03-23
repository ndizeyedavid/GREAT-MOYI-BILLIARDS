import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function ReadNews() {
    return (
        <>
            <Navbar />

            <main className="w-[75%] mx-auto mt-[60px] flex flex-col gap-[46px] items-start  justify-start">

                <div className="flex flex-col gap-6">
                    <h3 className="text-[30px] font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla animi expedita tempore.</h3>

                    {/* author */}
                    <div className="mx-7">
                        <div className="flex items-center gap-4">
                            <img src="/assets/pool3.png" className="size-[58px] rounded-full object-cover" alt={"authorName" + " Author"} width={500} height={500} />
                            <div className="flex flex-col gap-1 text-white/90">
                                <span>writtern by <span className="text-[#f14d3a] cursor-pointer hover:opacity-90">Mellow</span></span>
                                <span>March 13, 2025</span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* thumbnail */}
                <img src="/assets/pool1.jpg" className="w-full h-[500px] rounded-md object-cover opacity-85" alt="Thumbnail" width={500} height={300} />

                {/* news content */}
                <div className="space-y-7 ">
                    <p>halfway sheet sum source percent without sale closely satellites offer tomorrow turn maybe equipment school garden carry spite couple sugar feed face shoulder party label food if must slept impossible separate apart sharp ought met writer length rocket cotton use anywhere wrapped combine jungle willing sang rapidly properly fix her on pressure library zoo danger produce pass for gently habit rush heat afternoon written yesterday square electricity phrase indicate must mad building</p>
                    <p>disappear pot diagram airplane happened though word handle sign horse numeral arrange applied place number own foreign plus day without child magic construction lion refused ordinary mind western library wild ocean ring hope bee poetry with capital pot receive paid bowl alone pool machinery voyage copy brain medicine</p>
                    <p>halfway sheet sum source percent without sale closely satellites offer tomorrow turn maybe equipment school garden carry spite couple sugar feed face shoulder party label food if must slept impossible separate apart sharp ought met writer length rocket cotton use anywhere wrapped combine jungle willing sang rapidly properly fix her on pressure library zoo danger produce pass for gently habit rush heat afternoon written yesterday square electricity phrase indicate must mad building</p>
                    <p>disappear pot diagram airplane happened though word handle sign horse numeral arrange applied place number own foreign plus day without child magic construction lion refused ordinary mind western library wild ocean ring hope bee poetry with capital pot receive paid bowl alone pool machinery voyage copy brain medicine</p>
                    <p>halfway sheet sum source percent without sale closely satellites offer tomorrow turn maybe equipment school garden carry spite couple sugar feed face shoulder party label food if must slept impossible separate apart sharp ought met writer length rocket cotton use anywhere wrapped combine jungle willing sang rapidly properly fix her on pressure library zoo danger produce pass for gently habit rush heat afternoon written yesterday square electricity phrase indicate must mad building</p>
                    <p>disappear pot diagram airplane happened though word handle sign horse numeral arrange applied place number own foreign plus day without child magic construction lion refused ordinary mind western library wild ocean ring hope bee poetry with capital pot receive paid bowl alone pool machinery voyage copy brain medicine</p>
                </div>

            </main>

            <div className='mt-[100px]'>
                <Footer />
            </div>
        </>
    )
}

export default ReadNews
