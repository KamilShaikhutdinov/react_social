const ADD_POST = "ADD-POST";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
  let initialState =  {
    
    postData: [
      { id: 1, message: "Привет", likesCount: 1 },
      { id: 2, message: "Это первый пост", likesCount: 5 },
      { id: 3, message: "Мем с котами", likesCount: 66 },
      { id: 4, message: "Видос", likesCount: 300 },
      { id: 5, message: "Ещё 1 пост", likesCount: 555 },
    ],
    
    newPostText: " ",
    
    
  }

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // обработчик постов в профайле
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = " ";
      

      return state;
      
    case UPDATE_NEW_POST_TEXT:
      // обработчик символов Textarea в профайле
      state.newPostText = action.newText;
      
      return state;
    default:
      return state;
  }
};

export default profileReducer;
