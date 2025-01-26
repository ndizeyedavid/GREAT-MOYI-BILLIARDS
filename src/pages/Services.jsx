import { Palette, Wrench, Zap } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {

    const [stats, setStats] = useState([]);
    useEffect(() => {
        axios.get("/data/analytics.json").then((response) => {
            const data = response.data;
            setStats(data)
        })
    })

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] bg-[url('/pool-table-hero.jpg')] bg-cover bg-fixed">
                <div className="absolute inset-0 bg-black/50">
                    <div className="flex items-center justify-center h-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl font-bold text-center text-white"
                        >
                            Crafting Premium Pool Experiences
                        </motion.h1>
                    </div>
                </div>
            </div>

            <div className="w-[90%] mx-auto py-20">
                {/* About Section */}
                <div className="grid grid-cols-1 gap-10 mb-20 md:grid-cols-2">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-8 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
                    >
                        <h4 className="text-[#FFD700] text-[36px] font-bold mb-6">Great Moyi</h4>
                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            Welcome to Great Moyi Billiards, your premium destination for exceptional pool tables. We blend artistry with precision to create tables that become the centerpiece of your space.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-8 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
                    >
                        <h4 className="text-[#FFD700] text-[36px] font-bold mb-6">Our Legacy</h4>
                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            Since 2021, we've revolutionized the billiards industry through innovation and craftsmanship. Each table tells a story of precision, passion, and perfection.
                        </p>
                    </motion.div>
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <h4 className="text-[#FFD700] text-[48px] font-bold text-center mb-16">Premium Services</h4>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-6 border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl"
                            >
                                <div className="w-16 h-16 mb-6 bg-[#05020d] rounded-full flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h5 className="mb-4 text-2xl font-bold text-white">{service.title}</h5>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-8 mb-20 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className="p-6 text-center bg-gray-800/50 rounded-xl"
                        >
                            <h3 className="text-[#FFD700] text-4xl font-bold mb-2">{stat.number}</h3>
                            <p className="text-gray-300">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="p-12 text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl">
                    <h4 className="text-[#FFD700] text-[36px] font-bold mb-6">Let's Create Something Special</h4>
                    <p className="mb-8 text-xl text-gray-300">
                        Ready to elevate your game room? We're here to help bring your vision to life.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FFD700] text-gray-900 text-lg font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
                    >
                        Contact Us Now
                    </motion.a>
                </div>
            </div>
            <Footer variant="custom" />
        </div>
    );
}

const services = [
    {
        title: "Custom Design",
        description: "Bespoke pool tables crafted to your exact specifications and style preferences.",
        icon: <Palette />
    },
    {
        title: "Professional Installation",
        description: "Expert installation ensuring perfect leveling and optimal playing conditions.",
        icon: <Wrench />
    },
    {
        title: "Maintenance",
        description: "Comprehensive maintenance services to keep your table in pristine condition.",
        icon: <Zap />
    }
];
