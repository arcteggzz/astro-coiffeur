import styles from "./ServicesPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { AllPagesHero } from "../../Components";
import {
  hairServicesOne,
  hairServicesTwo,
  beautyServicesOne,
  beautyServicesTwo,
  maleServicesOne,
  maleServicesTwo,
} from "./serviceData/serviceData";
import services_image from "./images/services_image.jpg";

export const SingleService = ({
  name,
  cost,
}: {
  name: string;
  cost: number;
}) => {
  return (
    <>
      <div className={styles.SingleService}>
        <p className={styles.single_service_p}>{name}</p>
        <p className={styles.single_service_p}>NGN{cost}</p>
      </div>
    </>
  );
};

const ServicesPage = () => {
  return (
    <AnimatedFadeInPage>
      <main className={styles.ServicesPage}>
        <AllPagesHero
          backgroundImage={services_image}
          bodyText="One stop shop for your beauty products"
          headerText="Store"
        />

        <section className={styles.services_offered_container}>
          <h2>Hair</h2>
          <p className={styles.offered_p}>
            All services are inclusive of Premium shampoo & conditioner with
            head massage!
          </p>

          <div className={styles.services_parent_container}>
            <div className={styles.services_container}>
              {hairServicesOne.map((item, index) => {
                return (
                  <>
                    <SingleService
                      key={index}
                      cost={item.cost}
                      name={item.name}
                    />
                  </>
                );
              })}
            </div>
            <div className={styles.services_container}>
              {hairServicesTwo.map((item, index) => {
                return (
                  <>
                    <SingleService
                      key={index}
                      cost={item.cost}
                      name={item.name}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.services_offered_container}>
          <h2>Beauty</h2>
          <p className={styles.offered_p}>
            The stay in our salon will bring you beauty, pleasure, relax and
            good mood.
          </p>

          <div className={styles.services_parent_container}>
            <div className={styles.services_container}>
              {beautyServicesOne.map((item, index) => {
                return (
                  <>
                    <SingleService
                      key={index}
                      cost={item.cost}
                      name={item.name}
                    />
                  </>
                );
              })}
            </div>
            <div className={styles.services_container}>
              {beautyServicesTwo.map((item, index) => {
                return (
                  <>
                    <SingleService
                      key={index}
                      cost={item.cost}
                      name={item.name}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.services_offered_container}>
          <h2>Male Salon</h2>
          <p className={styles.offered_p}>
            Explore our top notch gender tailored services for Males products
            and hair services.
          </p>

          <div className={styles.services_parent_container}>
            <div className={styles.services_container}>
              {maleServicesOne.map((item, index) => {
                return (
                  <>
                    <SingleService
                      key={index}
                      cost={item.cost}
                      name={item.name}
                    />
                  </>
                );
              })}
            </div>
            <div className={styles.services_container}>
              {maleServicesTwo.map((item, index) => {
                return (
                  <>
                    <SingleService
                      key={index}
                      cost={item.cost}
                      name={item.name}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </AnimatedFadeInPage>
  );
};

export default ServicesPage;
