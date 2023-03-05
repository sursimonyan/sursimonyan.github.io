import cn from "classnames";
import { forwardRef, useRef } from "react";
import { images } from "../../assets/images";
import { useIsVisible } from "../../hooks/useIsVisible";

import styles from "./Works.module.scss";

export const Works = forwardRef((props, worksRef) => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);

  return (
    <section className={styles.works} ref={scrollRef}>
      <h2
        className={cn(styles.works__title, {
          [styles.title_transition]: isOnDiv,
        })}
        ref={worksRef}
      >
        Works
      </h2>
      <div
        className={cn(styles.works__inner, "container", {
          [styles.inner_transition]: isOnDiv,
        })}
      >
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Project 1</h4>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View on github
            </a>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project1}
            className={styles.works__item_img}
            alt="Project 1"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Project 1</h4>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View on github
            </a>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project2}
            className={styles.works__item_img}
            alt="Project 2"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Project 1</h4>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View on github
            </a>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project1}
            className={styles.works__item_img}
            alt="Project 1"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Project 1</h4>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View on github
            </a>
            <a href="/" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project2}
            className={styles.works__item_img}
            alt="Project 2"
          />
        </div>
      </div>
    </section>
  );
});
