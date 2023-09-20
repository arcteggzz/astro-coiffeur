import styles from "./StorePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";

const StorePage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.StorePage}>StorePage</main>
    </AnimatedFadeInPage>
  );
};

export default StorePage;
