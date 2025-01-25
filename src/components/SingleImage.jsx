
export default function SingleImage({img, alt}) {
  return (
    <div className="h-full w-[324px] object-cover rounded-xl border-2 border-neutral-800 overflow-hidden">
        <img src={img} className="w-full h-full" alt={alt} />
    </div>
  )
}
