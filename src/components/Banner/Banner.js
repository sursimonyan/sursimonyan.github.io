import { forwardRef } from "react";
import { images } from "../../assets/images";

import styles from "./Banner.module.scss";

export const Banner = forwardRef((props, bannerRef) => {
  return (
    <section className={styles.banner} ref={bannerRef}>
      <div className={styles.banner__image}>
        <img src={images.Banner} alt="Banner" />
      </div>
      <h1 className={styles.banner__title}>
        Hello, I'm <span className={styles.banner__title_name}>Suren Simonyan</span>.
        <br />
        I'm a Front-End web developer.
      </h1>
    </section>
  );
});
