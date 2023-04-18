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
            <h4 className={styles.works__item_title}>Portfolio (React)</h4>
            <a
              href="https://github.com/Suren1990/React-portfolio"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <span className={styles.works__item_links} rel="noreferrer">
              Here is the Project
            </span>
          </div>
          <img
            src={images.Project1}
            className={styles.works__item_img}
            alt="Portfolio"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Tour (React)</h4>
            <a
              href="https://github.com/Suren1990/React-Tur-UI"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="https://tour.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project2}
            className={styles.works__item_img}
            alt="Tur"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Discover (React)</h4>
            <a
              href="https://github.com/Suren1990/React-Discover-UI"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="https://discover.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project3}
            className={styles.works__item_img}
            alt="Discover"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Haypost (Nextjs)</h4>
            <a
              href="https://github.com/Suren1990/NEXT-JS-Postcard-UI"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="https://postcard.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project4}
            className={styles.works__item_img}
            alt="Haypost"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Simple project (React)</h4>
            <a
              href="https://github.com/Suren1990/squirrels"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="http://squirrelsnft.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project5}
            className={styles.works__item_img}
            alt="Simple project"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Meebur (HTML/CSS/JS)</h4>
            <a
              href="https://github.com/Suren1990/HTML-CSS-Meebur-UI"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="https://meebur.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project6}
            className={styles.works__item_img}
            alt="Simple project"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Imusic (React)</h4>
            <a
              href="https://github.com/Suren1990/imusic"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="https://imusic.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project8}
            className={styles.works__item_img}
            alt="Logotype project"
          />
        </div>
        <div className={styles.works__item}>
          <div className={styles.works__item_info}>
            <h4 className={styles.works__item_title}>Logotype (React)</h4>
            <a
              href="https://github.com/Suren1990/Logotype"
              className={styles.works__item_links}
              rel="noreferrer"
            >
              View on github
            </a>
            <a href="https://logotype.suren-simonyan.info/" target="_blank" className={styles.works__item_links} rel="noreferrer">
              View project
            </a>
          </div>
          <img
            src={images.Project7}
            className={styles.works__item_img}
            alt="Logotype project"
          />
        </div>
      </div>
    </section>
  );
});
