import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage, routePaths } from "../../utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splash_image from "../../Components/Navbar/images/coffeur_logo.png";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate(routePaths.HOMEPAGE);
    }, 3000);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SplashPage}>
          <img src={splash_image} alt="astro coiffeur logo" />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
