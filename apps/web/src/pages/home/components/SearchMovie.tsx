import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
import { useToggle } from "react-use"

export default function SearchMovie() {
  const { t } = useTranslation("home");

  const ref = useRef(null);

  const [isActive, toggle] = useToggle(false)

  const [search, setSearch] = useState("");
  const [data, setData] = useState<any[]>([]);


  const onSearch = (value: string) => {
    console.log("searching:", value);
    setSearch(value);
    setData([
      {
        value: "1",
        label: "Fake Data 1",
      },
      {
        value: "2",
        label: "Fake Data 2",
      },
    ]);
  };

  useEffect(() => {
    document.addEventListener('mousedown', toggle);

    return () => {
      document.removeEventListener('mousedown', toggle);
    };
  }, []);

  // TODO: add logic for loading and no results

  return (
    <div className="relative" ref={ref}>
      <input
        className="w-full shadow py-1.5 px-4 text-sm placeholder-gray-400/55 rounded pr-5"
        placeholder={t("search_movie_placeholder")}
        value={search}
        onChange={({ target }) => onSearch(target.value)}
      />
      <BsSearch className="absolute top-1/2 -translate-y-1/2 right-3" />
      {
        isActive && (
          <div className="rounded p-2 bg-white absolute w-full shadow-lg border">
            {data.map((result) => (
              <div key={result}>
                <span className="text-gray-500 text-sm"> {result.label}</span>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}
