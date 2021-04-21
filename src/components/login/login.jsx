import React from "react";
import styles from "./login.module.css";
import { checkLoginActionCreator } from "../../Redux/loginReducer";
import { Redirect } from "react-router";
import ReactSpeedometer from "react-d3-speedometer";

function Login(props) {
  let newLogin = React.createRef();
  let newPassword = React.createRef();
  
  let loginChange = () => {
    let userLogin = newLogin.current.value;
    let userPassword = newPassword.current.value;
    let newSpeed = props.state.speedValue;
    let action = checkLoginActionCreator(userLogin, userPassword,newSpeed);

    props.dispatch(action);
  };

  if (props.state.result === true) return <Redirect to="/Profile" />;

  return (
    <div className={styles.wrapper}>
      <form>
        <h1> Авторизация </h1>
        <div>
          <input
            ref={newLogin}
            name="login"
            type="text"
            placeholder="логин"
          ></input>
        </div>
        <div>
          <input
            ref={newPassword}
            name="password"
            type="text"
            placeholder="пароль"
          ></input>
        </div>
        <button type="button" className={styles.btn} onClick={loginChange}>
          Войти
        </button>
      </form>
      <div className={styles.error}>
        {props.state.showError ? props.state.error : null}

        <div>
          {props.state.showError ? (
            <ReactSpeedometer
              maxValue={20}
              value={props.state.speedValue}
              needleColor="black"
              startColor="green"
              segments={5}
              endColor="red"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Login;
