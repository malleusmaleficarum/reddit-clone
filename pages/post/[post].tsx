import Post from "../../components/Post";
import styles from "../../styles/SinglePost.module.css";

const PostId = () => {
  const postid = 1;

  return (
    <div className={styles.container}>
      <Post post={postid} />
      <div>
        <p>Comment as malleus</p>
      </div>
    </div>
  );
};

export default PostId;
