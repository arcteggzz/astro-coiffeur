import styles from "../Styles/Hero.module.scss";
import bg_1 from "../images/hero_11.jpg";
import bg_2 from "../images/hero_2.jpg";
import bg_3 from "../images/hero_7.jpg";
import bg_4 from "../images/hero_9.jpg";
import bg_5 from "../images/hero__4.jpg";
import bg_6 from "../images/hero_header_bg_1.jpg";
import bg_7 from "../images/hero_header_bg_2.jpg";
import bg_8 from "../images/gallery_13.jpg";
import bg_9 from "../images/gallery_17.jpg";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const backgroundImages = [
    bg_1,
    bg_2,
    bg_3,
    bg_4,
    bg_5,
    bg_6,
    bg_7,
    bg_8,
    bg_9,
  ];
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(0);
  const timerRef: React.MutableRefObject<number | undefined> =
    useRef(undefined);

  const headerStyles = {
    backgroundImage: `url(${backgroundImages[currentBackgroundImage]})`,
  };

  const goToNext = () => {
    const isLastSlide = currentBackgroundImage === backgroundImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentBackgroundImage + 1;
    setCurrentBackgroundImage(newIndex);
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  });

  return (
    <header className={styles.Hero} style={headerStyles}>
      <h1>Experience Your Best</h1>
      <div className={styles.location_container}>
        <p className={styles.p_text}>59 Community Boulevard</p>
        <p className={styles.p_text}>Middle of University Road</p>
      </div>
    </header>
  );
};

export default Hero;
