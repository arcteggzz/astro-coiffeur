import styles from "./AllPagesHero.module.scss";

const AllPagesHero = ({
  backgroundImage,
  headerText,
  bodyText,
}: {
  backgroundImage: string;
  headerText: string;
  bodyText: string;
}) => {
  const AllPagesHero = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <header className={styles.AllPagesHero} style={AllPagesHero}>
      <h2>{headerText}</h2>
      <p>{bodyText}</p>
    </header>
  );
};

export default AllPagesHero;
