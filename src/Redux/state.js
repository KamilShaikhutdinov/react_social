
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


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
    if (action.type === ADD_POST) {
      // обработчик постов в профайле
      let newPost = {
        id: 5,
        message: this.state.profilePage.newPostText,
        likesCount: 0,
      };
      this.state.profilePage.postData.push(newPost);
      this.state.profilePage.newPostText = " ";
      this.rerender(this.state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      // обработчик символов Textarea в профайле
      this.state.profilePage.newPostText = action.newText;
      this.rerender(this.state);
    }
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

export const addPostActionCreator = () => {
  
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  };
};

export default store;
