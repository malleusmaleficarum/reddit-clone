import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Post.module.css";
import Avatar from "./Avatar";

type Props = {
  post?: number;
};

const Post = ({ post }: Props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <ArrowUpIcon
          className={`${styles.leftside__icon} ${styles.up}`}
          onClick={increment}
        />
        <p>{counter}</p>
        <ArrowDownIcon
          className={`${styles.leftside__icon} ${styles.down}`}
          onClick={decrement}
        />
      </div>
      <Link href={`/post/${post}`}>
        {/* Body */}
        <div className={styles.rightside}>
          {/* Header */}
          <div className={styles.rightside__header}>
            <Avatar />
            <p>
              <span>
                <Link href={`/subreddit/${post}`}>r/cscareerquestions</Link>
              </span>{" "}
              • Posted by u/malleusmaleficarum 5 hours ago
            </p>
          </div>
          {/* Content */}
          <div className={styles.rightside__body}>
            <h2>Tesla is offering 1 week's pay</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              suscipit ex in augue cursus, nec posuere urna bibendum.
              Pellentesque ultrices pellentesque velit sit amet malesuada. Sed
              non sapien vel neque pretium tincidunt. Sed pellentesque tortor
              sit amet mauris malesuada lacinia. Duis a lectus tincidunt,
              egestas erat efficitur, suscipit mi.
            </p>
          </div>
          {/* Footer */}
          <div className={styles.rightside__footer}>
            <div className={styles.rightside__footer_icon}>
              <ChatAltIcon height={23} />
              <p>33 Comments</p>
            </div>
            <div className={styles.rightside__footer_icon}>
              <GiftIcon height={23} />
              <p>Awards</p>
            </div>
            <div
              className={`${styles.rightside__footer_icon} ${styles.hidden}`}
            >
              <ShareIcon height={23} />
              <p>Share</p>
            </div>
            <div
              className={`${styles.rightside__footer_icon} ${styles.hidden}`}
            >
              <BookmarkIcon height={23} />
              <p>Save</p>
            </div>
            <div className={styles.rightside__footer_icon}>
              <DotsHorizontalIcon height={23} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
