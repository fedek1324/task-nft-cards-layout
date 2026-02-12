interface NftItem {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
}

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
