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

function randomEndTime(): number {
  const ms = (Math.random() * 24 * 60 + 10) * 60 * 1000;
  return Date.now() + ms;
}

function randomImage(): string {
  return CARD_IMAGES[Math.floor(Math.random() * CARD_IMAGES.length)];
}

export interface NftCardData {
  id: string;
  name: string;
  image: string;
  bid: number;
  endTime: number;
}

export function generateCardData(
  nfts: { id: string; name: string }[]
): NftCardData[] {
  return nfts.map((nft) => ({
    id: nft.id,
    name: nft.name,
    image: randomImage(),
    bid: randomBid(),
    endTime: randomEndTime(),
  }));
}
