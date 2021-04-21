const CHECK_LOGIN = "CHECK_LOGIN";

export const checkLoginActionCreator = (userLogin, userPassword,newSpeed) => {
  return {
    type: CHECK_LOGIN,
    newlogin: userLogin,
    newPassword: userPassword,
    Status: true,
    speedValue:newSpeed,
    
  };
};

let initialState = {
  login: "login",
  password: "password",
  result: false,
  error: "Неверные регистрационные данные!",
  showError: false,
  speedValue:0,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN:
      if (
        action.newlogin === state.login &&
        action.newPassword === state.password
      ) {
        state.result = true;
      } else {
        (state.showError = action.Status);
        (state.speedValue=action.speedValue+1);
      }

      return state;

    default:
      return state;
  }
};

export const checkLogin = (login, password, showError,speedValue) => ({
  CHECK_LOGIN,
  data: { login, password, showError,speedValue },
});

export default loginReducer;
