
export default function CarouselContainer({ children }) {
  return (
    <div className="grid grid-cols-4 absolute left-0 right-0 mx-auto top-[-130px] w-[95%] h-[304px]">
      {children}
    </div>
  )
}
