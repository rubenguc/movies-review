interface MovieInfoProps {
  poster: string;
  title: string;
  author: string;
  categories: string[]
}

export default function MovieInfo({
  poster,
  author,

  categories,
  title
}: MovieInfoProps) {
  return (
    <div className="flex gap-2">
      <img src={poster} width={180} className="flex-[20%]" />
      <div className="flex flex-col gap-2 flex-[80%]">
        <h3 className="text-xl font-semibold">
          {title}
        </h3>
        <p className="text-sm text-gray-500 font-light">
          {author}
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <p className="bg-gray-200 text-center text-gray-500 text-xs p-1 w-fit rounded">
              {category}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
