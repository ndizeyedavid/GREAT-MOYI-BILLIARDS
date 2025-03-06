import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import SimpleLoading from "../components/SimpleLoading";
import scrollToTop from "../context/scrollToTop";
import pb from "../utils/pocketbase";
import DatabaseService from "../services/databaseServices";
import { storage } from "../utils/appwrite";

export default function Product() {
    const { id } = useParams();

    const [mainImage, setMainImage] = useState(0);
    const [showSpec, setShowSpec] = useState(false);

    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [specs, setSpecs] = useState([]);
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetch_data() {
            const data = await DatabaseService.getDocument(import.meta.env.VITE_TABLES_COLLECTION, id);
            setData(data);
            setImages(data.preview_images);
            setSpecs(JSON.parse(data.specs));
            setFeatures(JSON.parse(data.features))
            setLoading(false);
        }

        fetch_data()
    }, [])

    function formatMessage(title, price) {
        const message = `Greatings! I am thrilled to inform you about your interest in purchasing the "${title}" priced at "${price.toLocaleString()} RWF". `
        return message.replaceAll(" ", "%20");
    }

    scrollToTop();

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />

            <div className="container w-[90%] px-4 py-8 mx-auto">

                {loading ? <SimpleLoading /> : null}

                {/* Product Hero Section */}
                {!loading ?
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Image Gallery */}
                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-lg bg-gray-800/50 aspect-[4/3]">
                                <img
                                    src={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, images[mainImage])}
                                    alt="Pool Table"
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMainImage(idx)}
                                        className={`overflow-hidden rounded-lg bg-gray-800/50 aspect-square
                                              ${mainImage === idx ? 'ring-2 ring-blue-500' : ''}`}
                                    >
                                        <img
                                            src={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, img)}
                                            alt={`View ${idx + 1}`}
                                            className="object-cover w-full h-full transition-all duration-300 hover:scale-110"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold text-white">{data.title}</h1>
                                <p className="text-xl text-blue-400">{data.price.toLocaleString()} RWF</p>
                            </div>

                            <div className="space-y-4 text-gray-300">
                                <p className="leading-relaxed capitalize">
                                    {data.description}
                                </p>

                                <div className="space-y-2 capitalize">
                                    {features.map((value, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Link to={`https://api.whatsapp.com/send?phone=250796140857&text=${formatMessage(data.name, data.price)}`} className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105">
                                    Order Now
                                </Link>
                                <button
                                    onClick={() => setShowSpec(!showSpec)}
                                    className="px-8 py-3 font-semibold text-white transition-all duration-300 transform border border-gray-600 rounded-lg hover:border-blue-500 hover:bg-gray-800"
                                >
                                    Specifications
                                </button>
                            </div>

                            {/* Specifications Dropdown */}
                            <div className={`transition-all duration-500 overflow-hidden ${showSpec ? 'max-h-[500px]' : 'max-h-0'}`}>
                                <div className="p-4 mt-4 space-y-3 border border-gray-700 rounded-lg bg-gray-800/50">
                                    {specs.map((spec, idx) => (
                                        <div key={idx} className="flex justify-between text-sm capitalize">
                                            <span className="text-gray-400">{spec.label}</span>
                                            <span className="text-white">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>

            <div className="mt-[50px]"><Footer variant="custom" /></div>
        </div>
    );
}
