import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
    return (
        <div className="p-12 text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl">
            <h4 className="text-[#FFD700] text-[27px]  md:text-[36px] font-bold mb-6">Let's Create Something Special</h4>
            <p className="mb-8 text-[15px] md:text-xl text-gray-300">
                Ready to elevate your game room? We're here to help bring your vision to life.
            </p>
            <Link
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] text-gray-900 text-lg font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition duration-300"
            >
                Contact Us Now
            </Link>
        </div>
    )
}
