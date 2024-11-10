import cn from "classnames";
import { useState } from "react";

import styles from "./Header.module.scss";
import { images } from "../../assets/images";

export const Header = ({ refsData }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpenMenu((prev) => false);
  };

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={cn(styles.header, { [styles.header__open_menu]: isOpenMenu })}
    >
      <section className={`${styles.header__inner} container`}>
        <span
          className={styles.header__logo}
          onClick={() => {
            scrollTo(refsData.bannerRef);
            closeMenu();
          }}
        >
          <img src={images.Logo} alt="Logo" />
        </span>
        <nav className={cn(styles.nav, { [styles.open]: isOpenMenu })}>
          <div className={styles.nav__menu}>
            <span
              className={styles.nav__menu_item}
              onClick={() => {
                scrollTo(refsData.bannerRef);
                closeMenu();
              }}
            >
              Home
            </span>
            <span
              className={styles.nav__menu_item}
              onClick={() => {
                scrollTo(refsData.aboutRef);
                closeMenu();
              }}
            >
              About
            </span>
            <span
              className={styles.nav__menu_item}
              onClick={() => {
                scrollTo(refsData.worksRef);
                closeMenu();
              }}
            >
              Works
            </span>
          </div>
          <div className={styles.nav__social}>
            <a
              href="https://github.com/sursimonyan"
              className={styles.nav__social_item}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/suren-simonyan-300809bb/"
              className={styles.nav__social_item}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <a href="https://sursimonyan.github.io/public/cv.pdf" target="_blank" className={styles.nav__resume} rel="noreferrer">Resume</a>
        </nav>
        <div
          className={cn(styles.header__menu, { [styles.active]: isOpenMenu })}
          onClick={toggleMenu}
        >
          <span className={styles.header__menu_line}></span>
        </div>
      </section>
    </header>
  );
};
