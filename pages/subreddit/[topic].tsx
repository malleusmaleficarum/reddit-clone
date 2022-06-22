import { useRouter } from "next/router";
import Avatar from "../../components/Avatar";
import Feed from "../../components/Feed";
import PostBox from "../../components/PostBox";
import styles from "../../styles/Subreddit.module.css";

const Subreddit = () => {
  const {
    query: { topic },
  } = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.wrapper__inner}>
          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.content}>
            <h1>Welcome to the r/nextjs subreddit</h1>
            <p>{topic}</p>
          </div>
        </div>
      </div>

      <div className={styles.container2}>
        <PostBox />
        <Feed />
      </div>
    </div>
  );
};

export default Subreddit;
