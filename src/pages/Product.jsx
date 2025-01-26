import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Product() {
    const [mainImage, setMainImage] = useState(0);
    const [showSpec, setShowSpec] = useState(false);

    const images = [
        "/assets/pool1.jpg",
        "/assets/pool2.webp",
        "/assets/pool1.jpg",
        "/assets/pool1.jpg"
    ];

    const specs = [
        { label: "Dimensions", value: "8ft x 4ft (Standard)" },
        { label: "Playing Surface", value: "Italian Slate" },
        { label: "Frame", value: "Solid Mahogany" },
        { label: "Cushions", value: "K-66 Profile Rubber" },
        { label: "Cloth", value: "Championship Worsted" },
        { label: "Legs", value: "Carved Solid Wood" },
        { label: "Pockets", value: "Professional Grade Leather" },
        { label: "Weight", value: "850 lbs" }
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />

            <div className="container px-4 py-8 mx-auto">
                {/* Product Hero Section */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="overflow-hidden rounded-lg bg-gray-800/50 aspect-[4/3]">
                            <img
                                src={images[mainImage]}
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
                                        src={img}
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
                            <h1 className="text-3xl font-bold text-white">Professional Tournament Pool Table</h1>
                            <p className="text-xl text-blue-400">$6,999.99</p>
                        </div>

                        <div className="space-y-4 text-gray-300">
                            <p className="leading-relaxed">
                                Experience professional-grade gaming with our tournament-standard pool table.
                                Crafted with premium materials and meticulous attention to detail, this table
                                offers exceptional playability and stunning aesthetics.
                            </p>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Professional Tournament Grade</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Genuine Italian Slate</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Premium Leather Pockets</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-8 py-3 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105">
                                Order Now
                            </button>
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
                                    <div key={idx} className="flex justify-between text-sm">
                                        <span className="text-gray-400">{spec.label}</span>
                                        <span className="text-white">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[50px]"><Footer variant="custom" /></div>
        </div>
    );
}
