const SHOW_NEWS = "SHOW-NEWS";

export const showNewsActionCreator = () => {
  return {
    type: SHOW_NEWS,
  };
};

let initialState = {
  newsData: [
    { id: 1, news: "новость 1" },
    { id: 2, news: "новость 2" },
    { id: 3, news: "новость 3" },
    { id: 4, news: "ещё одна новость" },
    { id: 5, news: "ещё одна новость +1" },
  ],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NEWS:
      return state;
    default:
      return state;
  }
};

export default newsReducer;
