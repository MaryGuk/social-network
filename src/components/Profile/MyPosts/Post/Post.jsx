import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-real-madrid-club-clipart-PNG.png" />
      {props.message}
      <div>
        <span> like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
