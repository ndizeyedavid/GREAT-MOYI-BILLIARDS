import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import scrollToTop from "../context/scrollToTop";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import axios from "axios";
import pb from "../utils/pocketbase";
import { useForm } from "react-hook-form";
import SimpleLoading from "../components/SimpleLoading";
import DatabaseService from "../services/databaseServices";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetch_data() {
            setLoading(true);
            const result = await DatabaseService.listDocuments(import.meta.env.VITE_SITE_COLLECTION);
            setData(result[0]);
            setLoading(false);
        }

        fetch_data();
    }, [])


    async function sendMessage(data) {
        setIsLoading(true)
        try {
            await DatabaseService.createDocument(import.meta.env.VITE_SERVICES_COLLECTION, {
                names: data.names,
                email: data.email,
                phone: data.phone,
                message: data.message,
            });
            setIsSuccess(true);
        } catch (err) {
            alert("Message Not sent\nAn Error Occured.")
        } finally {
            setIsLoading(false);
            reset();
        }
    }

    scrollToTop();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <Navbar />
            <div className="container px-4 py-12 mx-auto">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white">Contact Us</h1>
                    <p className="max-w-2xl mx-auto text-gray-400">
                        Have questions about our products or services? We're here to help and would love to hear from you.
                    </p>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    {loading ?
                        <SimpleLoading />

                        :

                        <div className="space-y-8">
                            <div className="p-6 rounded-lg bg-gray-800/70 backdrop-blur-xl">
                                <h2 className="mb-6 text-2xl font-bold text-white">Get In Touch</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4 text-gray-300">
                                        <FaPhone className="text-xl text-blue-500" />
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p>{data.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-gray-300">
                                        <FaEnvelope className="text-xl text-blue-500" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p>{data.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 text-gray-300">
                                        <FaMapMarkerAlt className="text-xl text-blue-500" />
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p>{data.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="p-6 rounded-lg bg-gray-800/70 backdrop-blur-xl">
                                <h2 className="mb-6 text-2xl font-bold text-white">Follow Us</h2>
                                <div className="flex space-x-6">
                                    <a href={data.facebook} className="text-blue-500 transition-colors hover:text-blue-400">
                                        <FaFacebook size={24} />
                                    </a>
                                    <a href={data.twitter} className="text-blue-500 transition-colors hover:text-blue-400">
                                        <FaTwitter size={24} />
                                    </a>
                                    <a href={data.instagram} className="text-blue-500 transition-colors hover:text-blue-400">
                                        <FaInstagram size={24} />
                                    </a>
                                    <a href={data.linkedIn} className="text-blue-500 transition-colors hover:text-blue-400">
                                        <FaLinkedin size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Map Section */}
                            <div className="p-6 rounded-lg bg-gray-800/70 backdrop-blur-xl">
                                <h2 className="mb-6 text-2xl font-bold text-white">Location</h2>
                                <div className="w-full h-64 overflow-hidden rounded-lg">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3987.4155584251407!2d30.042845074487666!3d-1.9885578867958926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1738528747518!5m2!1sen!2srw"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    }

                    {/* Contact Form */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-lg"></div>
                        <form onSubmit={handleSubmit(sendMessage)} className="relative w-full p-8 border rounded-lg shadow-2xl bg-gray-800/70 backdrop-blur-xl border-gray-700/50 hover:border-blue-500/50">
                            <div className="mb-8 animate-fade-in-down">
                                <h2 className="text-2xl font-bold text-center text-white">
                                    Write for us
                                </h2>
                                <p className="text-center text-white/50">We would like to hear more from you</p>
                            </div>

                            <div className="space-y-6">
                                <div className="transition-all duration-300 transform hover:translate-x-1">
                                    <label className="block mb-2 text-white/80">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg bg-gray-700/50 border-gray-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 focus:outline-none hover:border-blue-400/50"
                                        required
                                        {...register("names")}
                                    />
                                </div>

                                <div className="transition-all duration-300 transform hover:translate-x-1">
                                    <label className="block mb-2 text-white/80">Phone</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg bg-gray-700/50 border-gray-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 focus:outline-none hover:border-blue-400/50"
                                        required
                                        {...register("phone")}
                                    />
                                </div>

                                <div className="transition-all duration-300 transform hover:translate-x-1">
                                    <label className="block mb-2 text-white/80">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg bg-gray-700/50 border-gray-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 focus:outline-none hover:border-blue-400/50"
                                        required
                                        {...register("email")}
                                    />
                                </div>

                                <div className="transition-all duration-300 transform hover:translate-x-1">
                                    <label className="block mb-2 text-white/80">Message</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-white bg-gray-700/50 rounded-lg
                                                 border border-gray-600/50 focus:border-blue-500/50
                                                 focus:ring-2 focus:ring-blue-500/25 focus:outline-none
                                                 transition-all duration-300 hover:border-blue-400/50
                                                 min-h-[150px] resize-y"
                                        required
                                        {...register("message")}
                                    ></textarea>
                                </div>

                                {isSuccess && (
                                    <div className="p-3 py-5 mt-6 text-green-400 bg-gray-800 border-l-4 border-green-700 animate-fade-in">
                                        Message sent successfully! ✨
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full px-6 py-3 font-bold text-white rounded-lg
                                              transform transition-all duration-300
                                              ${isLoading
                                            ? 'bg-blue-600/50 cursor-wait'
                                            : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25'
                                        }`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : 'Send Message'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer variant="custom" />
        </div>
    );
}
