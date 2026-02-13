import { NftItem } from "../../types/nft";
import Slider from "../Slider/Slider";
import styles from "./Main.module.scss";

interface MainProps {
  nfts: NftItem[];
}

export default function Main({ nfts }: MainProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Weekly - Top NFT</h1>
      <Slider nfts={nfts} />
    </main>
  );
}
