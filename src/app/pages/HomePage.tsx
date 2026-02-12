import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import { fetchNftData } from "../utils/fetchNftData";
import styles from "./HomePage.module.scss";

export default async function HomePage() {
  const nfts = await fetchNftData();

  return (
    <div className={styles.homePage}>
      <Nav />
      <Main nfts={nfts} />
      <Footer />
    </div>
  );
}
