import profileReducer from "./profileReducer";




let store = {
  state: {
    profilePage: {
      postData: [
        { id: 1, message: "Привет", likesCount: 1 },
        { id: 2, message: "Это первый пост", likesCount: 5 },
        { id: 3, message: "Мемес с котами", likesCount: 69 },
        { id: 4, message: "гачи мемес", likesCount: 300 },
        { id: 5, message: "нэвэльный", likesCount: 1488 },
      ],
      newPostText: " ",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Ashot" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Igor" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Marat" },
        { id: 6, name: "Andrey" },
        { id: 7, name: "Marat" },
        { id: 8, name: "Andrey" },
        { id: 9, name: "Камиль" },
      ],
      messagesData: [
        { id: 1, message: "hello" },
        { id: 2, message: "hi" },
        { id: 3, message: "kak dela?" },
      ],
      newMessageText: " ",
    },
  },
  getState() {
    return this.state;
  },
  subscribe(observer) {
    this.rerender = observer;
  },
  rerender() {},

  dispatch(action) {
    this.state.profilePage = profileReducer(this.state.profilePage,action)
    this.rerender(this.state);
   
  },

  // обработчик сообшений в диалогах

  addMessage() {
    let newMessage = {
      id: 4,
      message: this.state.messagesPage.newMessageText,
    };
    this.state.messagesPage.messagesData.push(newMessage);
    this.state.messagesPage.newMessageText = " ";
    this.rerender(this.state);
  },
  // обработчик символов Textarea в диалогах
  updateNewMessageText(newText) {
    this.state.messagesPage.newMessageText = newText;
    this.rerender(this.state);
  },
};



export default store;
