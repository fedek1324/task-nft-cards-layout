import { NftItem } from "../types/nft";

export async function fetchNftData(): Promise<NftItem[]> {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/nfts/list", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch NFT data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching NFT data:", error);
    return [];
  }
}
