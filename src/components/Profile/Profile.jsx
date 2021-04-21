// import styles from "./profile.module.css";
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Redirect } from "react-router";

function  Profile(props) {
  if (props.loginState.result === false) return <Redirect to="/login"/>;
  
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
