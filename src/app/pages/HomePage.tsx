import Nav from "../components/Nav/Nav";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
