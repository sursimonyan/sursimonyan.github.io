import cn from "classnames";
import { forwardRef } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";

import styles from "./About.module.scss";
import { images } from "../../assets/images";

export const About = forwardRef((props, aboutRef) => {
  const isOnDiv = useIsVisible(aboutRef);

  return (
    <section className={styles.about} ref={aboutRef}>
      <h2 className={cn(styles.about__title, { [styles.title_transition]: isOnDiv })}>Skills</h2>
      <div className={cn(styles.about__inner, "container", { [styles.inner_transition]: isOnDiv })}>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>HTML/HTML5</h4>
            <span className={styles.about__item_level}>85%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconHtml}
            alt="html icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>CSS3</h4>
            <span className={styles.about__item_level}>85%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconCSS}
            alt="css icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>JavaScript</h4>
            <span className={styles.about__item_level}>70%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconJavasscript}
            alt="javascript icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>React</h4>
            <span className={styles.about__item_level}>65%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconReact}
            alt="react icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>Redux</h4>
            <span className={styles.about__item_level}>50%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconRedux}
            alt="redux icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>Figma</h4>
            <span className={styles.about__item_level}>50%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconFigma}
            alt="figma icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>Adobe xd</h4>
            <span className={styles.about__item_level}>50%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconXD}
            alt="adobe xd icon"
          />
        </div>
        <div className={styles.about__item}>
          <div className={styles.about__item_info}>
            <h4 className={styles.about__item_title}>Photoshop</h4>
            <span className={styles.about__item_level}>30%</span>
          </div>
          <img
            className={styles.about__item_icon}
            src={images.IconPhotoshop}
            alt="adobe photoshop icon"
          />
        </div>
      </div>
    </section>
  );
});
