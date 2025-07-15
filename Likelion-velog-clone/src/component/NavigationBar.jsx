import React from "react";
import graph from "/src/assets/graph.png";
import recent from "/src/assets/recent.png";
import feed from "/src/assets/feed.png";
import downArrow from "/src/assets/down-arrow.png";
import menu from "/src/assets/menu.png";
import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <div className={`${styles["navbar-item"]} ${styles.selected}`}>
          <img src={graph} width={30} height={30} />
          <p>트렌딩</p>
        </div>
        <div className={styles["navbar-item"]}>
          <img src={recent} width={30} height={30} />
          <p>최신</p>
        </div>
        <div className={styles["navbar-item"]}>
          <img src={feed} width={30} height={30} />
          <p>피드</p>
        </div>
      </div>

      <div className={styles["navbar-right"]}>
        <div className={styles["dropdown-box"]}>
          <p>이번 달</p>
          <img src={downArrow} width={15} height={15} />
        </div>
        <img
          className={styles["menu-icon"]}
          src={menu}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
