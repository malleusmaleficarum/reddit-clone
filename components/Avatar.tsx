import Image from "next/image";
import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = () => {
  return (
    <div className={styles.container}>
      <Image
        src={"https://avatars.dicebear.com/api/male/:asd.svg"}
        layout='fill'
      />
    </div>
  );
};

export default Avatar;
