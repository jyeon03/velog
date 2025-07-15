import React from "react";
import alram from "/src/assets/alarm.png";
import search from "/src/assets/search.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>velog</h1>
      <div className={styles.btns}>
        <img
          id="alrma-icon"
          className={styles["btn-icon"]}
          src={alram}
          alt="alram-image"
        />
        <img
          id="search-icon"
          className={styles["btn-icon"]}
          src={search}
          alt="search-image"
        />
        <div className={styles["create-btn"]}>로그인</div>
      </div>
    </header>
  );
};

export default Header;
