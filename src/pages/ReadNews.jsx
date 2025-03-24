import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
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
            {!loading && (
                <Helmet>
                    <title>{fetchedNews.title} - Great Moyi Billiards</title>
                    <meta name="description" content={fetchedNews.description || fetchedNews.title} />
                    <meta property="og:title" content={fetchedNews.title} />
                    <meta property="og:description" content={fetchedNews.description || fetchedNews.title} />
                    <meta property="og:image" content={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, fetchedNews.thumbnail)} />
                </Helmet>
            )}
            <Navbar />

            <article className="w-[75%] mx-auto mt-[60px] flex flex-col gap-[46px] items-start justify-start">
                {loading ? (
                    <SimpleLoading />
                ) : (
                    <>
                        <header className="flex flex-col gap-6">
                            <h1 className="text-[30px] font-semibold">{fetchedNews.title}</h1>

                            <div className="mx-7">
                                <div className="flex items-center gap-4">
                                    <div className="size-[58px] rounded-full object-cover bg-gradient-to-br from-pink-500 to-yellow-500" />
                                    <div className="flex flex-col gap-1 text-white/90">
                                        <span>written by <span className="text-[#f14d3a] cursor-pointer hover:opacity-90">{fetchedNews.author}</span></span>
                                        <time dateTime={fetchedNews.$createdAt}>{new Date(fetchedNews.$createdAt).toDateString()}</time>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <img
                            src={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, fetchedNews.thumbnail)}
                            className="w-full h-[500px] rounded-md object-cover opacity-85 mb-7"
                            alt={`${fetchedNews.title} thumbnail`}
                            width={1200}
                            height={500}
                            loading="eager"
                        />

                        <section className="prose space-y-7 prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: fetchedNews.story }} />

                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "NewsArticle",
                                "headline": fetchedNews.title,
                                "datePublished": fetchedNews.$createdAt,
                                "author": {
                                    "@type": "Person",
                                    "name": fetchedNews.author
                                }
                            })}
                        </script>
                    </>
                )}
            </article>

            <div className='mt-[100px]'>
                <Footer />
            </div>
        </>
    )
}

export default ReadNews
