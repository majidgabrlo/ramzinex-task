import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Trade } from "../types/Trade";
import type { PairStats } from "../types/PairStats";

export const publicRamzinexApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://publicapi.ramzinex.com/exchange/api/v1.0/exchange",
  }),
  endpoints: (builder) => ({
    getAllTrades: builder.query<{ data: { [key: string]: Trade } }, void>({
      query: () => "/orderbooks/allTrades",
    }),
    getPairStats: builder.query<PairStats, string>({
      query: (id: string) => `/chart/statistics-24/${id}`,
    }),
  }),
});

export const { useGetAllTradesQuery, useGetPairStatsQuery } = publicRamzinexApi;
