import styles from "./GalleryPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";

const GalleryPage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>GalleryPage</main>
    </AnimatedFadeInPage>
  );
};

export default GalleryPage;
