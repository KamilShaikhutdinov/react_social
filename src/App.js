import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import MyNews from "./components/news/showNews";
import Login from "./components/login/login"
import mainPage from "./components/mainPage/mainPage"
import { Route,Redirect } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
      <Redirect to="/main" />
        <Route
          path="/news"
          render={() => <MyNews state={props.state.newsPage}
          
          dispatch={props.dispatch}
            />}
        />
        <Route
          path="/Profile"
          
          render={() => (<Profile state={props.state.profilePage} 
            loginState={props.state.loginPage}
            dispatch={props.dispatch}
             />
          )}
        />
         <Route
          path="/login"
          render={() => (<Login state={props.state.loginPage} 
            dispatch={props.dispatch}
             />
          )}
                   
        />
         <Route
          path="/main"
          component={mainPage}
                   
        />
      </div>
    </div>
  );
}

export default App;
