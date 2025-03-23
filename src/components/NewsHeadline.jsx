import { Link } from "react-router-dom"

function NewsHeadline({ thumbnail, title, description, authorName, authorImage, date }) {
    return (
        <Link to={"/news/" + title.replaceAll(" ", "+").toLowerCase()} className="transition-all hover:-translate-y-3 flex flex-col overflow-hidden h-fit w-[90%] border border-white/10 rounded-lg gap-[32px]">
            {/* thumbnail */}
            <img src={thumbnail} className="w-full h-[358px] object-cover" alt={title + " Thumbnail"} width={500} height={500} />

            {/* contents */}
            <div className="px-[33px] flex flex-col gap-[31px] pb-[34px]">
                {/* div-1 */}
                <div className="flex flex-col gap-[12px]">
                    <h3 className="text-[30px] font-semibold">{title}</h3>
                    <p className="text-[16px] text-white/80 w-[70%]">{description}</p>
                </div>

                {/* div-2 */}
                <div className="grid w-full grid-cols-2">
                    {/* TODO: grid-col-2 */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-white/50">Written by</h5>
                        <div className="flex items-center gap-4">
                            <img src={authorImage} className="size-[28px] rounded-full object-cover" alt={authorName + " Author"} width={500} height={500} />
                            <span>{authorName}</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h5 className="text-white/50">Published on</h5>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default NewsHeadline
