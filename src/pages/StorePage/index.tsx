import styles from "./StorePage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { AllPagesHero } from "../../Components";
import store_hero from "./images/hero_store.jpg";
import { SingleItemForSale } from "../../Components";
import { itemsForSale } from "./itemsForSale";

const StorePage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.StorePage}>
        <AllPagesHero
          backgroundImage={store_hero}
          bodyText="Purchase useable items from our one-stop shop"
          headerText="Welcome to the Store"
        />

        <section className={styles.items_container}>
          {itemsForSale.map((item, index) => {
            return (
              <>
                <SingleItemForSale
                  key={index}
                  cost={item.cost}
                  name={item.name}
                />
              </>
            );
          })}
        </section>
      </main>
    </AnimatedFadeInPage>
  );
};

export default StorePage;
