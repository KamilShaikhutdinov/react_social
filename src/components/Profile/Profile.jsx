// import styles from "./profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function  Profile(props) {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData}
      dispatch={props.dispatch}
      newPostText={props.state.newPostText} 
      
       />
    </div>
  );
}

export default Profile;
