import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pair } from "../types/Pair";

export const getPairs = createApi({
  reducerPath: "pairs",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ramzinex.com/exchange/api/v2.0/exchange/pairs",
  }),
  endpoints: (builder) => ({
    getPairs: builder.query<{ data: { pairs: Pair[] } }, void>({
      query: () => "/",
    }),
    getPairById: builder.query<{ data: { pair: Pair } }, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetPairsQuery, useGetPairByIdQuery } = getPairs;
