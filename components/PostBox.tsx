import Avatar from "./Avatar";
import styles from "../styles/PostBox.module.css";
import { LinkIcon, PhotographIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

const PostBox = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const onSubmit = handleSubmit((value) => {
    const notification = toast.loading("Creating new post...");
    console.log(value);
    setTimeout(() => {
      toast.success("Post has been created", { id: notification });
      reset();
    }, 2000);
  });

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.container}>
        <Avatar />
        <input
          {...register("postTitle", { required: true })}
          className={styles.inputtext}
          type='text'
          placeholder='Enter your title...'
          autoComplete='off'
        />
        <PhotographIcon
          onClick={() => {
            setImageBoxOpen(!imageBoxOpen);
          }}
          className={`${styles.icon} ${imageBoxOpen && styles.icon__clicked}`}
        />
        <LinkIcon className={styles.icon} />
      </div>

      {watch("postTitle") && (
        <div className={styles.wrapper}>
          <div className={styles.wrapper__container}>
            <p>Body:</p>
            <input
              {...register("postBody")}
              type='text'
              placeholder='Text (Optional)'
            />
          </div>
          <div className={styles.wrapper__container}>
            <p>Subreddit:</p>
            <input
              {...register("subreddit", { required: true })}
              type='text'
              placeholder='i.e International Politics'
            />
          </div>

          {imageBoxOpen && (
            <div className={styles.wrapper__container}>
              <p>Image URL:</p>
              <input
                {...register("postImage")}
                type='text'
                placeholder='Optional...'
              />
            </div>
          )}

          {/* errors */}
          {Object.keys(errors).length > 0 && (
            <div className={styles.errors}>
              {errors.postTitle?.type === "required" && (
                <p>A Post title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>Subreddit is required</p>
              )}
            </div>
          )}
        </div>
      )}
      {watch("postTitle") && (
        <button type='submit' className={styles.button}>
          Create Post
        </button>
      )}
    </form>
  );
};

export default PostBox;
