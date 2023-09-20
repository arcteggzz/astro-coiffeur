import styles from "../Styles/Hero.module.scss";

const Hero = () => {
  return (
    <header className={styles.Hero}>
      <p>Tega</p>
      <h1>Oghenetega Esedere</h1>
      <h4>Fullstack Web Developer</h4>
      <div className={styles.blinds_cover}></div>

      <div className={styles.mouse_scroll_container}>
        <p>Images</p>
        <p>scroll down</p>
      </div>
    </header>
  );
};

export default Hero;
