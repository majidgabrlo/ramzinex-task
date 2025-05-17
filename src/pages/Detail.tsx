import { useNavigate, useParams } from "react-router-dom";
import { useGetPairByIdQuery } from "../services/getPairs";
import { useSelector } from "react-redux";
import type { RootState } from "../stores";
import { useTranslation } from "../locales/i18n";
import { useGetPairStatsQuery } from "../services/publicRamzinex";
import Spinner from "../kit/Spinner";
import Button from "../kit/Button";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const locale = useSelector((state: RootState) => state.locale.localization);

  const {
    data,
    isLoading: isGettingPairs,
    isError: getPairIdError,
  } = useGetPairByIdQuery(id!, {
    pollingInterval: 20000,
    skip: !id,
  });
  const {
    data: pairStats,
    isLoading: isGettingPairStats,
    isError: getPairStatsError,
  } = useGetPairStatsQuery(id!, {
    pollingInterval: 20000,
    skip: !id,
  });
  const pair = data?.data?.pair;
  if (isGettingPairStats || isGettingPairs) {
    return (
      <div className="flex justify-center items-center my-5">
        <Spinner />
      </div>
    );
  }
  if (getPairIdError || getPairStatsError) {
    return (
      <div className="flex-grow flex justify-center py-4 text-red-400">
        {t("somethingWentWrong")}
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex-grow">
        <div className="mx-auto">
          <img src={pair?.logo} className="w-10 h-10 mx-auto mb-2" />
          <div className="text-[12px] text-center dark:text-white">
            {pair?.name?.[locale]} ({pair?.slug})
          </div>
        </div>
        <div className="flex flex-col gap-y-2 dark:!text-white">
          <div className="flex justify-between">
            <div>{t("englishName")}</div>
            <div>{pair?.name?.en}</div>
          </div>
          <div className="flex justify-between">
            <div>{t("price")}</div>
            <div>{pairStats?.close.toLocaleString()}</div>
          </div>
          <div className="flex justify-between">
            <div>{t("changes24h")}</div>
            <div>{pairStats?.change_percent}</div>
          </div>
          <div className="flex justify-between">
            <div>{t("tradesAmount")}</div>
            <div>{pairStats?.base_volume}</div>
          </div>
        </div>
      </div>
      <Button onClick={() => navigate("/")}>{t("back")}</Button>
    </div>
  );
};

export default Detail;
