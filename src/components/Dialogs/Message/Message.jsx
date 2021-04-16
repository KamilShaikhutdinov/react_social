import styles from "./../Dialogs.module.css";




const Message = (props) => {
  return <div className={styles.Message}>{props.message}</div>;
};

  
export default Message;
