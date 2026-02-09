import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface NftItem {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
}

export const nftApi = createApi({
  reducerPath: "nftApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
  }),
  endpoints: (builder) => ({
    getNftList: builder.query<NftItem[], void>({
      query: () => "/nfts/list",
    }),
  }),
});

export const { useGetNftListQuery } = nftApi;
