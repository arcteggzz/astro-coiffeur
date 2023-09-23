import styles from "../Styles/Services.module.scss";
import {
  hairServicesOne,
  hairServicesTwo,
} from "../../ServicesPage/serviceData/serviceData";
import { SingleService } from "../../ServicesPage";
import { routePaths } from "../../../utils";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className={styles.Services}>
      <h3 className={styles.services_text}>Our Services</h3>

      <section className={styles.services_offered_container}>
        <h2>Hair</h2>
        <p className={styles.offered_p}>
          All services are inclusive of Premium shampoo & conditioner with head
          massage!
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

      <Link to={routePaths.SERVICESPAGE} className={styles.services_link}>
        See all our services
      </Link>
    </section>
  );
};

export default Services;
