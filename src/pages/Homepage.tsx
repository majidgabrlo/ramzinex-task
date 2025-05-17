import { useMemo, useState } from "react";
import InfiniteScrollList from "../components/InfiniteScrollList";
import PairItem from "../components/PairItem";
import Spinner from "../kit/Spinner";
import SvgIcon from "../kit/SVGIcon";
import { useTranslation } from "../locales/i18n";
import { useGetPairsQuery } from "../services/getPairs";
import { useGetAllTradesQuery } from "../services/publicRamzinex";
import classNames from "classnames";
import type { RootState } from "../stores";
import { useSelector } from "react-redux";
import type { Trade } from "../types/Trade";
import type { Pair } from "../types/Pair";
import Header from "../components/Header";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: pairs, isLoading: isGettingPairs } = useGetPairsQuery(
    undefined,
    { pollingInterval: 20000 }
  );
  const { data: trades, isLoading: isGettingTrades } = useGetAllTradesQuery(
    undefined,
    { pollingInterval: 20000 }
  );
  const locale = useSelector((state: RootState) => state.locale.localization);

  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("");
  const { t } = useTranslation();

  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortDirection === "" || sortDirection === "DESC") {
        setSortDirection("ASC");
        return;
      }
      setSortDirection("DESC");
      return;
    }
    setSortKey(key);
    setSortDirection("ASC");
  };

  const pairsData = useMemo(() => {
    if (!pairs || !trades) return [];
    const sortDirectionNumber = sortDirection === "ASC" ? -1 : 1;
    const tempPairs = (
      pairs?.data?.pairs.map((item) => ({
        ...item,
        ...trades?.data?.[item.id],
      })) as (Pair & Trade)[]
    ).filter((pair) => {
      if (`${pair?.name?.en}${pair?.name?.fa}`.includes(searchTerm))
        return true;
      return false;
    });
    if (sortKey === "name") {
      tempPairs?.sort((a, b) => {
        return (
          sortDirectionNumber *
          a?.name?.[locale].localeCompare(b?.name?.[locale])
        );
      });
    }
    if (sortKey === "price") {
      tempPairs?.sort((a, b) => {
        return sortDirectionNumber * (b.Price - a?.Price);
      });
    }
    return tempPairs;
  }, [pairs, trades, sortDirection, sortKey, locale, searchTerm]);

  return (
    <div className="h-full flex flex-col">
      <Header onChange={setSearchTerm} searchTerm={searchTerm} />
      <div className="px-4 flex justify-between dark:text-white">
        <div
          onClick={() => handleSort("name")}
          className="flex items-center cursor-pointer gap-x-1 py-1"
        >
          <div>{t("name")}</div>
          <div className="py-1">
            <SvgIcon
              className={classNames("dark:fill-white", {
                "!rotate-180": sortDirection === "ASC",
              })}
              name={sortKey === "name" ? "arrow" : "sort"}
            />
          </div>
        </div>
        <div
          onClick={() => handleSort("price")}
          className="flex items-center cursor-pointer gap-x-1 py-1"
        >
          <div>{t("latestPrice")}</div>
          <div className="py-1">
            <SvgIcon
              className={classNames("dark:fill-white", {
                "!rotate-180": sortDirection === "ASC",
              })}
              name={sortKey === "price" ? "arrow" : "sort"}
            />
          </div>
        </div>
      </div>
      {(isGettingPairs || isGettingTrades) && (
        <div className="flex justify-center py-4">
          <Spinner />
        </div>
      )}
      <div className="px-2 overflow-auto flex-grow h-0">
        <InfiniteScrollList
          data={pairsData || []}
          renderItem={(pair) => <PairItem key={pair?.id} pairItem={pair} />}
        />
      </div>
    </div>
  );
};

export default Homepage;
