import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { Hero } from "./Components";

const HomePage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>
        <Hero />
      </main>
    </AnimatedFadeInPage>
  );
};

export default HomePage;
