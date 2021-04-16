import styles from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from "react";



const Dialogs = (props) => {

 
  let dialogsElemets = props.state.dialogsData
  .map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  
  let messagesElements = props.state.messagesData
  .map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessage= React.createRef();

  let addMessage = () => {
    props.addMessage();
  };
  
  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsElemets}
      </div>
      <div className={styles.Messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessage}
          onChange={onMessageChange}
          value= {props.newMessageText}/>
        </div>
      <div>
      <button className={styles.btn} onClick={addMessage}>
            написать
          </button>
          </div>
      </div>
     
    </div>
  );
};

export default Dialogs;
