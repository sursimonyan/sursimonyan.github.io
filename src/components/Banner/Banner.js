import { forwardRef } from "react";
import { images } from "../../assets/images";

import styles from "./Banner.module.scss";

export const Banner = forwardRef((props, bannerRef) => {
  return (
    <section className={styles.banner} ref={bannerRef}>
      <div className={styles.banner__image}>
        <img src={images.Banner} alt="Banner" />
      </div>
      <div className={styles.banner__inner}>
        <h1 className={styles.banner__title}>
          Hi, I'm Simonyan Suren
          <span className={styles.banner__title_name}>
            A Passionate Frontend Developer
          </span>
        </h1>
        <p className={styles.banner__description}>
          I create beautiful, interactive, and user-friendly websites with
          modern technologies like HTML, CSS, JavaScript, React, Vue and more.
          Let’s bring your ideas to life!
        </p>
      </div>
    </section>
  );
});
