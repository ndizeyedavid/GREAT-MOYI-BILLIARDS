import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsHeadline from '../components/NewsHeadline'

function News() {
    return (
        <>
            <Navbar />
            <div className="w-[75%] mx-auto mt-[100px] flex flex-col gap-[96px] items-start  justify-start">

                <div className="flex flex-col items-start justify-start gap-3 text-left ">
                    <h3 className="text-white text-[42px] md:text-[52px] font-semibold leading-[71px]">News</h3>
                    <p className="text-white/55">we've got amazing announcements plus great sport news</p>
                </div>

                {/* headlines */}
                <div className='flex flex-col items-center gap-[64px]'>
                    <NewsHeadline thumbnail="/assets/pool3.png" title="Grand new championship" description="prove member detail property hand monkey replace flame alphabet positive record jump sunlight thing than golden open milk stared make either end wind goose" authorName="Mellow" authorImage="/assets/pool1.jpg" date="March 12, 2024" />
                </div>

            </div>

            <div className='mt-[100px]'>
                <Footer />
            </div>
        </>
    )
}

export default News
