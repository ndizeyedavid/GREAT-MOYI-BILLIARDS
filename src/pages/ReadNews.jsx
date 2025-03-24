import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import SimpleLoading from "../components/SimpleLoading";
import { storage } from "../utils/appwrite";
import DatabaseService from "../services/databaseServices";

function ReadNews() {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [fetchedNews, setFetchedNews] = useState([]);

    useEffect(() => {
        fetch_news();
    }, [id])

    async function fetch_news() {
        try {
            setLoading(true);
            const news = await DatabaseService.getDocument(import.meta.env.VITE_NEWS_COLLECTION, id);
            await DatabaseService.updateDocument(import.meta.env.VITE_NEWS_COLLECTION, id, { views: Number(news.views) + 1 });

            setFetchedNews(news);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching news:", error);
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar />

            <main className="w-[75%] mx-auto mt-[60px] flex flex-col gap-[46px] items-start  justify-start">

                {loading ?
                    <SimpleLoading />

                    :

                    <>
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[30px] font-semibold">{fetchedNews.title}</h3>

                            {/* author */}
                            <div className="mx-7">
                                <div className="flex items-center gap-4">
                                    <div className="size-[58px] rounded-full object-cover bg-gradient-to-br from-pink-500 to-yellow-500 animate-spin" />
                                    <div className="flex flex-col gap-1 text-white/90">
                                        <span>writtern by <span className="text-[#f14d3a] cursor-pointer hover:opacity-90">{fetchedNews.author}</span></span>
                                        <span>{new Date(fetchedNews.$createdAt).toDateString()}</span>
                                    </div>
                                </div>
                            </div>


                        </div>


                        {/* thumbnail */}
                        <img src={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, fetchedNews.thumbnail)} className="w-full h-[500px] rounded-md object-cover opacity-85 mb-7" alt="Thumbnail" width={500} height={300} />

                        {/* news content */}
                        <div className="space-y-7" dangerouslySetInnerHTML={{ __html: fetchedNews.story }} />
                    </>
                }
            </main>

            <div className='mt-[100px]'>
                <Footer />
            </div>
        </>
    )
}

export default ReadNews
