import Slider from "../Slider/Slider";
import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Weekly - Top NFT</h1>
      <Slider />
    </main>
  );
}
