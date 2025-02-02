import { Link } from "react-router-dom";

export default function Footer({ variant }) {
    return (
        <footer className={`mt-${variant == "custom" ? "[200px]" : "[600px]"}`}>
            <hr className="border border-white/5" />

            <div className="w-[90%] mx-auto p-5 flex justify-between gap-5">

                <div className="flex items-start gap-8">
                    <img src="/assets/logo/transparent/logo.png" className="w-[95px] object-cover h-[85px]" width={100} height={100} alt="Footer image" />
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-[25px]">Services</h3>
                        <ul className="flex flex-col gap-4 text-white/50">
                            <li><Link to="/about#details" className="transition-all hover:text-white/80">About Us</Link></li>
                            <li><Link to="/about#legacy" className="transition-all hover:text-white/80">Our Legacy</Link></li>
                            <li><Link to="/about#premium" className="transition-all hover:text-white/80">Premium Services</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start gap-8">
                    <img src="/assets/logo/transparent/thumb.png" className="w-[85px] object-cover h-[85px]" width={100} height={100} alt="Footer image" />
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-[25px]">Billiards</h3>
                        <ul className="flex flex-col gap-3 text-white/50">
                            <li><Link to="/expore#products" className="transition-all hover:text-white/80">Store</Link></li>
                            <li><Link to="/expore#products" className="transition-all hover:text-white/80">Custom Pool Tables</Link></li>
                            <li><Link to="/expore#products" className="transition-all hover:text-white/80">Suggest a design</Link></li>
                            <li><Link to="/expore#products" className="transition-all hover:text-white/80">Inquiries</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start gap-8">
                    <img src="/assets/logo/transparent/star.png" className="w-[85px] object-cover h-[85px]" width={100} height={100} alt="Footer image" />
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-[25px]">Contact</h3>
                        <ul className="flex flex-col gap-3 text-white/50">
                            <li><Link to="/contact" className="transition-all hover:text-white/80">Map</Link></li>
                            <li><Link to="/contact" className="transition-all hover:text-white/80">Write a Message</Link></li>
                            <li><Link to="/contact" className="transition-all hover:text-white/80">Contact Details</Link></li>
                            <li><Link to="/contact" className="transition-all hover:text-white/80">Confirm Order</Link></li>
                            <li><Link to="/contact" className="transition-all hover:text-white/80">Social Media</Link></li>
                        </ul>
                    </div>
                </div>


            </div>
            <hr className="border border-white/5" />

            <p className="flex items-center justify-center gap-2 p-5 text-center text-white/70">A Mesh with <img src="/assets/footer.svg" className="bg-white" height={20} width={20} alt="01" /> by <a href="http://ndizeyedavid.github.io" className="underline text-white/50 hover:text-white/80 hover:underline" target="_blank">David</a></p>

        </footer>
    )
}
