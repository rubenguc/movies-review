import { useMemo } from "react";
import { Tabs, TabsProps } from "antd";
import { useTranslation } from "react-i18next";
import styles from "../index.module.css"

interface MovieTabsProps {
  storyline: string;
  cast: any[];
  photos: ant[]
}

export default function MovieTabs({ cast, photos, storyline }: MovieTabsProps) {
  const { t } = useTranslation("movie")


  const items: TabsProps['items'] = useMemo(() => {
    return [
      {
        key: '1',
        label: t("storyline"),
        children: storyline,
      },
      {
        key: '2',
        label: t("cast"),
        children: cast,
      },
      {
        key: '3',
        label: t('photos'),
        children: photos,
      },
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cast, photos, storyline])

  return (
    <Tabs className={styles.tabs} defaultActiveKey="1" items={items} />
  )
}
