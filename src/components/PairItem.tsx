import { useSelector } from "react-redux";
import type { RootState } from "../stores";
import type { Pair } from "../types/Pair";
import type { Trade } from "../types/Trade";
import { Link } from "react-router-dom";

const PairItem = ({ pairItem }: { pairItem: Pair & Trade }) => {
  const locale = useSelector((state: RootState) => state.locale.localization);

  return (
    <Link to={`/${pairItem?.id}`}>
      <div className="flex justify-between dark:text-white items-center border-b border-gray-100 hover:bg-gray-100 hover:dark:bg-gray-700 transition-all">
        <div className="flex gap-x-3 py-2 items-center">
          <img className="w-7 h-7" src={pairItem?.logo} />
          <div className="text-[12px]">
            {pairItem?.name?.[locale]} ({pairItem?.slug})
          </div>
        </div>
        <div className="flex items-end gap-x-1 h-6">
          <div className="text-[12px]">IRR</div>
          <div className="text-[14px]">{pairItem?.Price?.toLocaleString()}</div>
        </div>
      </div>
    </Link>
  );
};

export default PairItem;
