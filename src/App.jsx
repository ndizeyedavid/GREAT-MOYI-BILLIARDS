import { Gamepad2, Verified } from "lucide-react"
import Alert from "./components/Alert"
import Container from "./components/Container"
import Navbar from "./components/Navbar"
import SingleCard from "./components/SingleCard"

function App() {
  return (
    <>
      {/* MAin body section container */}
      <Navbar />
      <Container>

        <div className="relative flex flex-col items-center justify-center h-screen">

          {/* gradient blobs */}
          <div className="absolute -top-[10px]" id="bg-gradient"></div>

          {/* illustrations */}
          <div className="relative rotate-[-220deg] top-4">
            <img src="/assets/illustrations/hero.svg" className="rotate-[60deg]" width={500} height={500} alt="Illustration" />
          </div>

          {/* hero description */}
          <div className="flex flex-col z-10 items-center gap-5 w-[663px] text-center">
            <h3 className="text-[80px] font-bold leading-[80px]"><span id="gradient">Supercharged</span> Entertainment</h3>

            <p className="text-white/40">Great Moyi is a blazingly fast, totally extendable launcher. It lets you complete tasks, calculate, share common links, and much more.</p>

            <button className="px-[15px] py-2 bg-white text-[#0d0d0d] font-medium rounded-md transition-all hover:bg-white/80">Order now anywhere</button>
          </div>

        </div>


        {/* Alert */}
        <div className="flex items-center justify-center">
          <Alert />
        </div>

        {/* Ad Section */}
        <div className="flex flex-col gap-[96px] h-screen items-center justify-center">

          <div className="flex flex-col items-center justify-center text-center w-[60%] gap-3">

            <h3 className="text-white text-[52px] font-semibold flex items-center gap-1.5">It's as awesome as <span className="text-[#59d499] flex items-center justify-center gap-1">Winning <Verified className="w-[52px] h-[52px]" /></span></h3>
            <p className="text-white/60">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

          </div>

          {/* Ad container */}
          <div id="ad-cont" className="flex items-center  rounded-md p-[34px]">
            <div className="w-[40%] flex flex-col gap-[20px]">
              {/* icon card */}
              <div className="p-2 rounded-md w-fit h-fit bg-white/30"><Gamepad2 className="w-[40px] h-[40px]" /></div>
              <h3 className="text-[28px] font-semibold">One up the competition</h3>
              <p className="text-white/45">On top of the core Raycast Extensions already built in, you can install Extensions built by Developers from the community. Everything you've asked for, in one place. Search and browse Extensions for your tools, actions and more.</p>
            </div>

            <div className="w-full h-full">
              <img src="/assets/pool3.png" className="rounded-lg object-cover w-full h-[500px]" width={500} height={500} alt="Pool image" />
            </div>

          </div>

        </div>

        {/* Mi fun section */}
        <div className="mt-[600px] flex flex-col gap-[96px] h-screen items-center justify-center">

          <div className="flex flex-col items-center justify-center text-center w-[60%] gap-3">

            <h3 className="text-white text-[52px] font-semibold leading-[71px]">Where <span className="fun-stuff">Playing</span><br />Meets <span className="fun-stuff">Perfection!</span></h3>
            <p className="text-white/55">Say hello to the Store. A home for Extensions published by our community of Developers using our API. Find extensions to the tools you use in your day-to-day</p>

          </div>

          {/* Pool tables */}
          <div className="grid grid-cols-3 gap-5">

            <SingleCard img="/assets/pool1.jpg" title="4 X 4 pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
            <SingleCard img="/assets/pool2.webp" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
            <SingleCard img="/assets/pool3.png" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
            <SingleCard img="/assets/pool4.jpeg" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
            <SingleCard img="/assets/pool1.jpg" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />
            <SingleCard img="/assets/pool2.webp" title="Arc Wooden  pool table" desc="let shown nor cap fallen creature passage ate power level system student pig motor grade beauty tail position storm cabin peace milk problem stiff" />

          </div>

        </div>
      </Container>

      <footer className="mt-[500px]">
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

    </>
  )
}

export default App
