import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useApp from "../../hooks/useApp";
import routePaths from "../../utils/routePaths";
import { useState } from "react";
import closeHamburger from "./images/closeHamburger.png";
import openHanburger from "./images/openHanburger.png";

const Navbar = () => {
  const { mobileNavbarOpen, toggleMobileNavbar } = useApp();
  const [navBarActive, setNavbarActive] = useState(false);

  const navElements = [
    { link: routePaths.HOMEPAGE, name: "Home" },
    { link: routePaths.GALLERYPAGE, name: "Gallery" },
    { link: routePaths.LOCATIONPAGE, name: "Location" },
    { link: routePaths.SERVICESPAGE, name: "Services" },
    { link: routePaths.STOREPAGE, name: "Store" },
  ];

  const changeBackgroundNavbarHandler = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundNavbarHandler);

  return (
    <>
      <nav className={styles.Navbar}>
        <div
          className={
            navBarActive
              ? `${styles.Navbar_container_light} ${styles.Navbar_active}`
              : styles.Navbar_container_light
          }
        >
          {/* desktop left hand side */}
          <Link to={"/"} className={styles.logo_icon}>
            Something
          </Link>

          {/* desktop middle hand side */}
          <Link to={"/"} className={styles.logo_icon}>
            Something
          </Link>

          {/* desktop right hand side */}
          <div className={styles.desktop_right}>
            {/* desktop navlinks  */}
            <div className={styles.navLinks_Desktop}>
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

            {/* mobile hamburger controller */}
            <button
              onClick={() => toggleMobileNavbar()}
              className={styles.hamburger}
            >
              <img
                src={mobileNavbarOpen ? closeHamburger : openHanburger}
                alt="Hamburger Menu Button"
              />
            </button>
          </div>
        </div>

        <div
          className={
            mobileNavbarOpen
              ? styles.sidebarMobileOpen
              : styles.Mobile_Nav_Light
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
          </section>
          <Link
            to={routePaths.GALLERYPAGE}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cv_button_mobile}
          >
            Download Cv
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
