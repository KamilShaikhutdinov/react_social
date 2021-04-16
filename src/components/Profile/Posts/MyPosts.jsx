import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator} from '../../../Redux/state'
import {updateNewPostTextActionCreator} from '../../../Redux/state'

function MyPosts(props) {
  let postsElement = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action =  updateNewPostTextActionCreator(text);
    props.dispatch(action)
  };

  return (
    <div className={styles.block}>
      {" "}
      <h3>Мои посты</h3>
      <div>
        {" "}
        <div>
          <textarea
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button className={styles.btn} onClick={addPost}>
            Запостить
          </button>
        </div>
      </div>
      <div className={styles.post}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
