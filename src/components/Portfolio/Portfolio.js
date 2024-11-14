import cn from "classnames";
import { forwardRef, useRef, useState } from "react";
import { useIsVisible } from "../../hooks/useIsVisible";
import { portfolio } from "../../data/data";

import styles from "./Portfolio.module.scss";

export const Portfolio = forwardRef((props, portfolioRef) => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);
  const [protfolioData] = useState(portfolio);

  return (
    <section className={styles.portfolio} ref={scrollRef}>
      <h2
        className={cn(styles.portfolio__title, {
          [styles.title_transition]: isOnDiv,
        })}
        ref={portfolioRef}
      >
        Portfolio
      </h2>
      <div
        className={cn(styles.portfolio__inner, "container", {
          [styles.inner_transition]: isOnDiv,
        })}
      >
        {protfolioData.map((item) => {
          return (
            <div className={styles.portfolio__item} key={item.id}>
              <div className={styles.portfolio__item_info}>
                <h4 className={styles.portfolio__item_title}>{item.title}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    className={styles.portfolio__item_links}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on github
                  </a>
                ) : (
                  <p className={styles.portfolio__item_links}>
                    Project is private
                  </p>
                )}
              </div>
              <img
                src={item.mainImage}
                className={styles.portfolio__item_img}
                alt={item.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
});
