import styles from "./Footer.module.scss";
import footer_image from "./images/footer_image.png";
// import { useDispatch } from "react-redux";
// import { openbookAppointmentModal } from "../../redux/features/bookAppointmentModal/bookAppointmentModalSlice";

const Footer = () => {
  // const dispatch = useDispatch();

  const getYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return `© ${currentYear} Oghenetega Esedere. All rights reserved.`;
  };

  // const openBookAppointmentModalHandler = () => {
  //   dispatch(openbookAppointmentModal());
  // };

  return (
    <>
      <footer className={styles.Footer}>
        <img src={footer_image} alt="" className={styles.footer_image} />

        <h2 className={styles.footer_header}>Be your best </h2>

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

        {/* <button
          className={styles.footer_book_button}
          onClick={() => openBookAppointmentModalHandler()}
        >
          Book an appointment
        </button> */}

        <div>
          <p className={styles.footer_p_text}>{getYear()}</p>
          <p className={styles.footer_p_text}>
            Image search by Nweke Esomchukwu
          </p>
          <p className={styles.footer_p_text}>Logo by Esedere Onajite</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
