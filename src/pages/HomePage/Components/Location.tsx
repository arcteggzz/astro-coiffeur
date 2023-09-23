import { Link } from "react-router-dom";
import { openbookAppointmentModal } from "../../../redux/features/bookAppointmentModal/bookAppointmentModalSlice";
import { routePaths } from "../../../utils";
import styles from "../Styles/Location.module.scss";
import location_image from "../images/location.png";
import { useDispatch } from "react-redux";

const Location = () => {
  const dispatch = useDispatch();

  const openBookAppointmentModalHandler = () => {
    dispatch(openbookAppointmentModal());
  };

  return (
    <section className={styles.Location}>
      <img src={location_image} alt="" className={styles.location_image} />

      <h2 className={styles.location_header}>Be your best </h2>

      <div className={styles.location_location_container}>
        <div className={styles.location_container}>
          <p className={styles.location_p_text}>59 Community Boulevard</p>
          <p className={styles.location_p_text}>Middle of University Road</p>
        </div>
        <div className={styles.contact_container}>
          <p className={styles.location_p_text}>+234 (708) 847 8400</p>
          <p className={styles.location_p_text}>oghenetega@unilag.akoka.com</p>
        </div>
      </div>

      <button
        className={styles.location_book_button}
        onClick={() => openBookAppointmentModalHandler()}
      >
        Book an appointment
      </button>

      <Link to={routePaths.LOCATIONPAGE} className={styles.location_link}>
        Location
      </Link>
    </section>
  );
};

export default Location;
