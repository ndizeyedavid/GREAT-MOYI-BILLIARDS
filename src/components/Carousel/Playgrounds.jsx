import CarouselContainer from "./CarouselContainer";
import CarouselItem from "./CarouselItem";
import Test from '/assets/hero.webp'

export default function Playgrounds() {
    return (
        <div className="grid grid-cols-1 mt-[200px]">

            <div className="relative px-[50px] pt-[200px] pb-[50px] bg-white rounded-xl shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] border-2 border-neutral-800">

                <CarouselContainer>
                    <CarouselItem src={Test} alt="img alt" />
                    <CarouselItem src={Test} alt="img alt" />
                    <CarouselItem src={Test} alt="img alt" />
                    <CarouselItem src={Test} alt="img alt" />
                </CarouselContainer>

                {/* top-notch */}
                <h3 className="text-[#191919] text-[40px] font-bold leading-[52px]">Playgrounds & Sports</h3>
                {/* control buttons */}
                <div className="absolute flex items-center gap-6 top-[200px] right-16">
                    <button className="p-3 text-xl bg-white rounded-lg border-2 border-[#333333] transition-all hover:shadow-[6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">👈</button>
                    <button className="p-3 text-xl bg-white rounded-lg border-2 border-[#333333] transition-all hover:shadow-[-6px_6px_0px_2px_rgba(30,30,30,1.00)] active:shadow-[0px_0px_2px_0px_rgba(30,30,30,1.00)]">👉</button>
                </div>

                <p className="text-[#4c4c4c] mt-5 text-[20px] font-medium leading-[30px]">Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.</p>
            </div>
        </div>
    )
}
