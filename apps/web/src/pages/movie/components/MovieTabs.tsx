import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

interface MovieTabsProps {
  storyline: string;
  cast: any[];
  photos: ant[];
}

export default function MovieTabs({ cast, photos, storyline }: MovieTabsProps) {
  const { t } = useTranslation("movie");

  const items = useMemo(() => {
    return [
      {
        key: "1",
        label: t("storyline"),
        children: storyline,
      },
      {
        key: "2",
        label: t("cast"),
        children: cast,
      },
      {
        key: "3",
        label: t("photos"),
        children: photos,
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cast, photos, storyline]);

  return (
    <div className="w-full py-2">
      <TabGroup>
        <TabList className="flex gap-4">
          {items.map((tab) => (
            <Tab
              key={tab.key}
              className=" data-[selected]:border-b-2 data-[selected]:text-orange-400 data-[selected]:border-b-orange-400 focus:outline-none"
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {items.map(({ children, key }) => (
            <TabPanel key={key} className="rounded-xl bg-white/5 p-3">
              {children}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
