import React from "react";
import styles from "./CardList.module.scss";

function formatDate(dateString) {
  const date = new Date(dateString.replace(/-/g, "/"));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}

const CardList = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map((item) => (
        <div className={styles.card} key={item.postID}>
          <img
            className={styles.thumbnail}
            src={item.thumbnail}
            alt={item.title}
          />
          <div className={styles.info}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.content}>{item.content}</p>
            <span className={styles.date}>{formatDate(item.createdAt)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
