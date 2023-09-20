import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(routePaths.HOMEPAGE);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SplashPage}>Splasj</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
