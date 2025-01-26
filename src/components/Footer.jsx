
export default function Footer({ variant }) {
    return (
        <footer className={`mt-${variant == "custom" ? "[200px]" : "[600px]"}`}>
            <hr className="border border-white/5" />

            <div className="w-[90%] mx-auto p-5 flex justify-between gap-5">

                <div className="flex items-start gap-8">
                    <img src="/assets/logo/transparent/logo.png" className="w-[95px] object-cover h-[85px]" width={100} height={100} alt="Footer image" />
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-[25px]">Services</h3>
                        <ul className="flex flex-col gap-2 text-white/50">
                            <li><a href="" className="transition-all hover:text-white/80">Store</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Developer</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Teams</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Pro</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Browser</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">API Docs</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Pricing</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Chanqeloq</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start gap-8">
                    <img src="/assets/logo/transparent/thumb.png" className="w-[85px] object-cover h-[85px]" width={100} height={100} alt="Footer image" />
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-[25px]">Billiards</h3>
                        <ul className="flex flex-col gap-2 text-white/50">
                            <li><a href="" className="transition-all hover:text-white/80">Store</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Developer</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Teams</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Pro</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Browser</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">API Docs</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Pricing</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Chanqeloq</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-start gap-8">
                    <img src="/assets/logo/transparent/star.png" className="w-[85px] object-cover h-[85px]" width={100} height={100} alt="Footer image" />
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-[25px]">Contact</h3>
                        <ul className="flex flex-col gap-2 text-white/50">
                            <li><a href="" className="transition-all hover:text-white/80">Store</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Developer</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Teams</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Pro</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Browser</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">API Docs</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Pricing</a></li>
                            <li><a href="" className="transition-all hover:text-white/80">Chanqeloq</a></li>
                        </ul>
                    </div>
                </div>


            </div>
            <hr className="border border-white/5" />

            <p className="flex items-center justify-center gap-2 p-5 text-center text-white/70">A Mesh with <img src="/assets/footer.svg" className="bg-white" height={20} width={20} alt="01" /> by <a href="http://ndizeyedavid.github.io" className="underline text-white/50 hover:text-white/80 hover:underline" target="_blank">David</a></p>

        </footer>
    )
}
