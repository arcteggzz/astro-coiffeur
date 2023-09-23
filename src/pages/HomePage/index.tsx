import styles from "./HomePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import {
  Hero,
  Location,
  WallOfLove,
  MeetTheTeam,
  Services,
} from "./Components";

const HomePage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>
        <Hero />
        <Services />
        <Location />
        <MeetTheTeam />
        <WallOfLove />
      </main>
    </AnimatedFadeInPage>
  );
};

export default HomePage;
