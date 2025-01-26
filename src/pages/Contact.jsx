import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
            <Navbar />
            <div className="flex justify-center items-center p-8 min-h-[calc(100vh-64px)]">
                <div className="relative w-full max-w-md animate-float">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-20 animate-pulse"></div>

                    <form onSubmit={handleSubmit}
                        className="relative w-full p-8 transition-all duration-500 border rounded-lg shadow-2xl bg-gray-800/70 backdrop-blur-xl border-gray-700/50 hover:border-blue-500/50">

                        <div className="mb-8 animate-fade-in-down">
                            <h2 className="text-2xl font-bold text-center text-white">
                                Get in Touch
                            </h2>
                            <p className="text-center text-white/50">We would like to hear more from you</p>
                        </div>

                        {isSuccess && (
                            <div className="absolute p-2 text-green-400 border-l-4 border-green-700 bg-green-50 top-4 right-4 animate-fade-in">
                                Message sent successfully! ✨
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="transition-all duration-300 transform hover:translate-x-1">
                                <label className="block mb-2 text-white/80">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg bg-gray-700/50 border-gray-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 focus:outline-none hover:border-blue-400/50"
                                    required
                                />
                            </div>

                            <div className="transition-all duration-300 transform hover:translate-x-1">
                                <label className="block mb-2 text-white/80">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 text-white transition-all duration-300 border rounded-lg bg-gray-700/50 border-gray-600/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/25 focus:outline-none hover:border-blue-400/50"
                                    required
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
                                ></textarea>
                            </div>

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
            <Footer variant="custom" />
        </div>
    );
}
