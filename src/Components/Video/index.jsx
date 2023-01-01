import React from "react";
import styles from "./styles.module.css";
const Video = ({ title, desc, thumbnail }) => {
  console.log(thumbnail);
  return (
    <div
      className={`${styles["video-card"]} min-h-[200px] rounded-sm flex bg-gradient-to-r from-black to-zinc-900 overflow-scroll`}
    >
      <img src={thumbnail.url} className={styles.thumbnail}></img>
      <div className="text-start ml-5 flex flex-col p-2">
        <p className="font-bold text-2xl mb-1">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Video;
