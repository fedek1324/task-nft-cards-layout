const CARD_IMAGES = [
  "/images/nft1.jpg",
  "/images/nft2.jpg",
  "/images/nft3.jpg",
  "/images/nft4.jpg",
  "/images/nft5.jpg",
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function seededRandom(seed: number, min: number, max: number): number {
  const x = Math.sin(seed) * 10000;
  return min + (x - Math.floor(x)) * (max - min);
}

function getBidFromHash(hash: number): number {
  return +seededRandom(hash, 0.5, 5.5).toFixed(2);
}

function getEndTimeFromHash(hash: number): number {
  const minutes = seededRandom(hash + 1000, 10, 24 * 60 + 10);
  return Date.now() + minutes * 60 * 1000;
}

function getImageFromHash(hash: number): string {
  const index = Math.floor(seededRandom(hash + 2000, 0, CARD_IMAGES.length));
  return CARD_IMAGES[index % CARD_IMAGES.length];
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
  return nfts.map((nft) => {
    const hash = hashString(nft.id + nft.name);
    return {
      id: nft.id,
      name: nft.name,
      image: getImageFromHash(hash),
      bid: getBidFromHash(hash),
      endTime: getEndTimeFromHash(hash),
    };
  });
}
