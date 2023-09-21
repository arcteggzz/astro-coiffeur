import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import routePaths from "../../utils/routePaths";
import { useState } from "react";
import closeHamburger from "./images/closeHamburger.png";
import openHanburger from "./images/openHanburger.png";
import coiffeur_logo from "./images/coffeur_logo.png";
import coiffeur_logo_white from "./images/coffeur_logo_white.png";
import { useDispatch, useSelector } from "react-redux";
import {
  closeNavbar,
  openNavbar,
  selectNavIsOpen,
} from "../../redux/features/mobileNav/mobileNavSlice";
import { openbookAppointmentModal } from "../../redux/features/bookAppointmentModal/bookAppointmentModalSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const mobileNavIsOpen = useSelector(selectNavIsOpen);

  const [navBarActive, setNavbarActive] = useState(false);

  const navElements = [
    { link: routePaths.HOMEPAGE, name: "Home" },
    { link: routePaths.SERVICESPAGE, name: "Services" },
    { link: routePaths.GALLERYPAGE, name: "Gallery" },
    { link: routePaths.STOREPAGE, name: "Store" },
  ];

  const changeBackgroundNavbarHandler = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  const openBookAppointmentModalHandler = () => {
    dispatch(openbookAppointmentModal());
  };

  window.addEventListener("scroll", changeBackgroundNavbarHandler);

  return (
    <>
      <nav className={styles.Navbar}>
        <div
          className={
            navBarActive
              ? `${styles.Navbar_container} ${styles.Navbar_active}`
              : styles.Navbar_container
          }
        >
          {/* desktop left hand side */}
          <div className={styles.left_hand_side}>
            {/* desktop navlinks  */}
            {navElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  key={elem.name}
                  className={
                    navBarActive
                      ? styles.single_NavLink
                      : styles.inactive_NavLink
                  }
                >
                  {elem.name}
                </NavLink>
              );
            })}
          </div>

          {/* desktop middle hand side */}
          <Link to={"/"} className={styles.logo_icon}>
            <img
              src={navBarActive ? coiffeur_logo : coiffeur_logo_white}
              alt=""
            />
          </Link>

          {/* desktop right hand side */}
          <div className={styles.right_hand_side}>
            <NavLink
              to={routePaths.LOCATIONPAGE}
              className={
                navBarActive ? styles.single_NavLink : styles.inactive_NavLink
              }
            >
              Location
            </NavLink>

            <button
              className={styles.book_button}
              onClick={() => openBookAppointmentModalHandler()}
            >
              Book an Appointment
            </button>

            {/* mobile hamburger controller */}
            <button
              onClick={() =>
                mobileNavIsOpen
                  ? dispatch(closeNavbar())
                  : dispatch(openNavbar())
              }
              className={styles.hamburger}
            >
              <img
                src={mobileNavIsOpen ? closeHamburger : openHanburger}
                alt="Hamburger Menu Button"
              />
            </button>
          </div>
        </div>

        <div
          className={
            mobileNavIsOpen ? styles.mobile_nav_open : styles.mobile_nav_closed
          }
        >
          <section className={styles.Navlinks_Mobile}>
            {navElements.map((elem) => {
              return (
                <NavLink
                  to={elem.link}
                  key={`${elem.link}_mobile`}
                  className={styles.mobile_NavLink}
                >
                  {elem.name}
                </NavLink>
              );
            })}

            <Link to={routePaths.GALLERYPAGE} className={styles.mobile_NavLink}>
              Location
            </Link>

            {/* <button
              className={styles.book_button_mobile}
              onClick={() => openBookAppointmentModalHandler()}
            >
              Book an Appointment
            </button> */}
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
