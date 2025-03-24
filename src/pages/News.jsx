import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsHeadline from '../components/NewsHeadline'
import DatabaseService from "../services/databaseServices"
import SimpleLoading from "../components/SimpleLoading"
import Empty from "../components/Empty"
import { useEffect, useState } from 'react'
import { storage } from '../utils/appwrite'

function News() {

    const [dummy, setDummy] = useState(0);
    const [loading, setLoading] = useState(false);
    const [fetchedNews, setFetchedNews] = useState([]);


    useEffect(() => {
        fetch_news();
    }, [dummy])

    async function fetch_news() {
        try {
            setLoading(true);
            const news = await DatabaseService.listDocuments(import.meta.env.VITE_NEWS_COLLECTION);
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
            <div className="w-[75%] mx-auto mt-[100px] flex flex-col gap-[96px] items-start  justify-start">

                <div className="flex flex-col items-start justify-start gap-3 text-left ">
                    <h3 className="text-white text-[42px] md:text-[52px] font-semibold leading-[71px]">News</h3>
                    <p className="text-white/55">we've got amazing announcements plus great sport news</p>
                </div>

                {/* headlines */}
                <div className='flex flex-col items-center gap-[64px]'>
                    {loading ?
                        null

                        :

                        <>

                            {fetchedNews.map((news) => (
                                <NewsHeadline
                                    key={news.$id}
                                    id={news.$id}
                                    title={news.title}
                                    description={news.description}
                                    thumbnail={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, news.thumbnail)}
                                    authorName={news.author}
                                    date={new Date(news.$createdAt).toDateString()}
                                    views={news.views}
                                />
                            ))}
                        </>
                    }

                </div>

            </div>

            {loading && <SimpleLoading />}
            {fetchedNews.length === 0 && <Empty title="No news available" text="There are no news articles or announcements yet. Create one using the 'New Story' button." />}

            <div className='mt-[100px]'>
                <Footer />
            </div>
        </>
    )
}

export default News
