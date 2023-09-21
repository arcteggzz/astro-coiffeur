import styles from "./LocationPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { AllPagesHero } from "../../Components";
import location_hero from "./images/location_hero.jpeg";

const LocationPage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.LocationPage}>
        <AllPagesHero
          backgroundImage={location_hero}
          bodyText="Find the hair groomer you can’t do without! We are located in your neighbourhood around University Road with more branches coming soon."
          headerText="Contacts/Locations"
        />

        <div className={styles.footer_location_container}>
          <div className={styles.location_container}>
            <p className={styles.footer_p_text}>59 Community Boulevard</p>
            <p className={styles.footer_p_text}>Middle of University Road</p>
          </div>
          <div className={styles.contact_container}>
            <p className={styles.footer_p_text}>+234 (708) 847 8400</p>
            <p className={styles.footer_p_text}>oghenetega@unilag.akoka.com</p>
          </div>
        </div>
      </main>
    </AnimatedFadeInPage>
  );
};

export default LocationPage;
