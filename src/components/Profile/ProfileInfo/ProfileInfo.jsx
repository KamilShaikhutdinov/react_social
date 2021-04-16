import styles from "./profileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <img
        alt=" "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuHRkkjxkzDE2OAod5MCLTGgRh4J-WoOrxaU3cYjEFexZl0iTqctr4UJ8TM9A4R6lZMY&usqp=CAU"
      ></img>
      <div className={styles.description}> Ава и описание </div>
    </div>
  );
}

export default ProfileInfo;
