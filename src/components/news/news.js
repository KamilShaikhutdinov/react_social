import styles from "./news.module.css";

function news(props) {
  return (
    <div className={styles.block}>
      
     
      <li>{props.message}</li>
      <div></div>
    </div>
  );
}

export default news;

