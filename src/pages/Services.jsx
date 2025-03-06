import { Palette, Wrench, Zap } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import scrollToTop from "../context/scrollToTop";
import CTA from "../components/CTA";
import pb from "../utils/pocketbase";
import SimpleLoading from "../components/SimpleLoading";
import DatabaseService from "../services/databaseServices";
import { storage } from "../utils/appwrite";

export default function Services() {

    const [teams, setTeams] = useState([]);
    const [inform, setInform] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetch_data() {
            setLoading(true);
            const result = await DatabaseService.listDocuments(import.meta.env.VITE_TEAM_COLLECTION);
            const information = await DatabaseService.getDocument(import.meta.env.VITE_ADS_COLLECTION, import.meta.env.VITE_AD_DOCUMENT);

            setTeams(result);
            setInform(information);
            setLoading(false);
        }

        fetch_data();
    }, [])

    scrollToTop();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] bg-[url('/pool-table-hero.jpg')] bg-cover bg-fixed">
                <div className="absolute inset-0 bg-black/50">
                    <div className="flex items-center justify-center h-full">
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-[95%] mx-auto font-bold text-center text-white leading-[50px] text-[36px] md:text-6xl"
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
                            {loading && <SimpleLoading />}
                            {inform.about}
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="p-8 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"
                    >
                        <h4 className="text-[#FFD700] text-[36px] font-bold mb-6">Our Legacy</h4>
                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            {loading && <SimpleLoading />}
                            {inform.legacy}
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

                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 text-center bg-gray-800/50 rounded-xl">

                        <h3 className="text-[#FFD700] text-4xl font-bold mb-2">{inform.tables_sold}</h3>
                        <p className="text-gray-300">Tables Sold</p>

                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 text-center bg-gray-800/50 rounded-xl">

                        <h3 className="text-[#FFD700] text-4xl font-bold mb-2">{inform.happy_clients}</h3>
                        <p className="text-gray-300">Happy Clients</p>

                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 text-center bg-gray-800/50 rounded-xl">

                        <h3 className="text-[#FFD700] text-4xl font-bold mb-2">{inform.districts}</h3>
                        <p className="text-gray-300">Operating Districts</p>

                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="p-6 text-center bg-gray-800/50 rounded-xl">

                        <h3 className="text-[#FFD700] text-4xl font-bold mb-2">{inform.experience}</h3>
                        <p className="text-gray-300">Years Experience</p>

                    </motion.div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <h4 className="text-[#FFD700] text-[48px] font-bold text-center mb-16">Meet Our Team</h4>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {loading ?
                            <SimpleLoading />

                            :

                            teams.map((member, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -10 }}
                                    className="p-6 text-center border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl"
                                >
                                    <img
                                        src={storage.getFilePreview(import.meta.env.VITE_IMAGES_BUCKET, member.avatar)}
                                        alt={member.name}
                                        className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-2 border-[#FFD700] aspect-square"
                                    />
                                    <h5 className="mb-2 text-2xl font-bold text-white">{member.name}</h5>
                                    <p className="text-[#FFD700] mb-3">{member.role}</p>
                                    <p className="text-gray-300">{member.description}</p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                {/* CTA */}
                <CTA />
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

const team = [
    {
        name: "John Smith",
        position: "Master Craftsman",
        description: "With over 15 years of experience in billiards table craftsmanship.",
        image: "/team/john.jpg"
    },
    {
        name: "Sarah Johnson",
        position: "Design Specialist",
        description: "Creating unique table designs that blend form and function.",
        image: "/team/sarah.jpg"
    },
    {
        name: "Mike Chen",
        position: "Installation Expert",
        description: "Ensuring perfect setup and playability for every table.",
        image: "/team/mike.jpg"
    }
];
