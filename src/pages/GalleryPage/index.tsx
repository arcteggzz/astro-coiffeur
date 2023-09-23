import styles from "./GalleryPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { AllPagesHero } from "../../Components";
import gallery_hero from "./images/hero_2.jpg";
import gallery_1 from "./images/gallery_10.jpg";
import gallery_2 from "./images/gallery_12.jpg";
import gallery_3 from "./images/gallery_14.jpg";
import gallery_4 from "./images/gallery_16.jpg";
import gallery_5 from "./images/gallery_18.jpg";
import gallery_6 from "./images/gallery_2.jpg";
import gallery_7 from "./images/gallery_20.jpg";
import gallery_8 from "./images/gallery_22.jpg";
import gallery_9 from "./images/gallery_24.jpg";
import gallery_10 from "./images/gallery_26.jpg";
import gallery_11 from "./images/gallery_28.jpg";
import gallery_12 from "./images/gallery_30.jpg";
import gallery_13 from "./images/gallery_32.jpg";
import gallery_14 from "./images/gallery_34.jpg";
import gallery_15 from "./images/gallery_36.jpg";
import gallery_16 from "./images/gallery_38.jpg";
import gallery_17 from "./images/gallery_4.jpg";
import gallery_18 from "./images/gallery_40.jpg";
import gallery_19 from "./images/gallery_42.jpg";
import gallery_20 from "./images/gallery_44.jpg";
import gallery_21 from "./images/gallery_6.jpg";
import gallery_22 from "./images/gallery_8.jpg";

const Image = ({ imageSrc }: { imageSrc: string }) => {
  return <img src={imageSrc} alt="" className={styles.image} />;
};

const GalleryPage = () => {
  const imageData = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_10,
    gallery_11,
    gallery_12,
    gallery_13,
    gallery_14,
    gallery_15,
    gallery_16,
    gallery_17,
    gallery_18,
    gallery_19,
    gallery_20,
    gallery_21,
    gallery_22,
  ];

  return (
    <AnimatedFadeInPage>
      <main className={styles.GalleryPage}>
        <AllPagesHero
          backgroundImage={gallery_hero}
          bodyText="Experience the greatness we have produced over the years."
          headerText="Gallery/Showroom"
        />

        <section className={styles.gallery_container}>
          {imageData.map((imageSource) => {
            return (
              <>
                <Image key={imageSource} imageSrc={imageSource} />
              </>
            );
          })}
        </section>
      </main>
    </AnimatedFadeInPage>
  );
};

export default GalleryPage;
