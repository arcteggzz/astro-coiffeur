import styles from "./PublicPageLayout.module.scss";
import { Navbar, Footer } from "../../Components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BookAppointmentModal } from "../../Components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { closeNavbar } from "../../redux/features/mobileNav/mobileNavSlice";
import { selectbookAppointmentModalIsOpen } from "../../redux/features/bookAppointmentModal/bookAppointmentModalSlice";

const PublicPageLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const bookAppointmentModalIsOpen = useSelector(
    selectbookAppointmentModalIsOpen
  );

  useEffect(() => {
    dispatch(closeNavbar());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    dispatch(closeNavbar());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bookAppointmentModalIsOpen) {
      document.body.style.position = "fixed";
    } else {
      const scrollY = parseInt(document.body.style.top || "0", 10);

      // Reset the body's styles to re-enable scrolling
      document.body.style.position = "";
      document.body.style.top = "";

      // Scroll to the previous position
      window.scrollTo(0, scrollY);
    }
  }, [bookAppointmentModalIsOpen]);

  return (
    <>
      <div className={styles.Light}>
        <div className={styles.PublicPageLayout}>
          <div className={styles.main_container}>
            <div className={styles.Navbar_container}>
              <div className={styles.Navbar_Child_Container}>
                <Navbar />
              </div>
            </div>
            <div className={styles.Outlet_container}>
              <div className={styles.Outlet_Child_Container}>
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
        </div>

        <div
          className={
            bookAppointmentModalIsOpen
              ? styles.modal_container_open
              : styles.modal_container_closed
          }
        >
          <BookAppointmentModal />
        </div>
      </div>
    </>
  );
};

export default PublicPageLayout;
