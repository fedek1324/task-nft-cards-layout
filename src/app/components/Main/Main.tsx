import Slider from "../Slider/Slider";
import styles from "./Main.module.scss";

interface NftItem {
  id: string;
  contract_address: string;
  name: string;
  asset_platform_id: string;
}

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
