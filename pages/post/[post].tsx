import Post from "../../components/Post";
import styles from "../../styles/SinglePost.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Avatar from "../../components/Avatar";

type FormData = {
  comment: string;
};

const PostId = () => {
  const postid = 1;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data.comment);
    const notif = toast.loading("Posting your comment...");
    setTimeout(() => {
      toast.success("Comment has been posted!", { id: notif });
      reset();
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <Post post={postid} />
      <div className={styles.commentwrapper}>
        <p className={styles.commentname}>
          Comment as <span>malleus</span>
        </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("comment")}
            className={styles.textarea}
            placeholder='What are your thoughts?'
          />
          <button className={styles.button} type='submit'>
            Comment
          </button>
        </form>
      </div>

      {/* user comments */}
      <div className={styles.comcontainer}>
        <div className={styles.comcontainer2}>
          {/* <hr className={styles.line} /> */}

          <div className={styles.avatar}>
            <Avatar />
          </div>
          <div className={styles.comwrapper}>
            <p className={styles.info}>
              <span>John</span> • 3 minutes ago
            </p>
            <p>this is comment from John</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostId;
