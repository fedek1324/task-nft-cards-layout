const CARD_IMAGES = [
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
];

function randomBid(): number {
  return +(Math.random() * 5 + 0.5).toFixed(2);
}

function randomTimer(): { hours: number; minutes: number; seconds: number } {
  return {
    hours: Math.floor(Math.random() * 24),
    minutes: Math.floor(Math.random() * 60),
    seconds: Math.floor(Math.random() * 60),
  };
}

function randomImage(): string {
  return CARD_IMAGES[Math.floor(Math.random() * CARD_IMAGES.length)];
}

export interface NftCardData {
  id: string;
  name: string;
  image: string;
  bid: number;
  timer: { hours: number; minutes: number; seconds: number };
}

export function generateCardData(
  nfts: { id: string; name: string }[]
): NftCardData[] {
  return nfts.map((nft) => ({
    id: nft.id,
    name: nft.name,
    image: randomImage(),
    bid: randomBid(),
    timer: randomTimer(),
  }));
}
