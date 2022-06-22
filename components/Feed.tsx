import Post from "./Post";
import styles from "../styles/Feed.module.css";
import { FC } from "react";

const data: number[] = [1, 2, 3, 4];

const Feed: FC = () => {
  return (
    <div className={styles.container}>
      {data.map((post, i) => {
        return <Post key={i} post={post} />;
      })}
    </div>
  );
};

export default Feed;
