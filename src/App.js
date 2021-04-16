import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Route
          path="/Dialogs"
          render={() => <Dialogs state={props.state.messagesPage}
          addMessage={props.addMessage}
          updateNewMessageText={props.updateNewMessageText}
            />}
        />
        <Route
          path="/Profile"
          render={() => (<Profile state={props.state.profilePage} 
            dispatch={props.dispatch}
             />
          )}
        />
      </div>
    </div>
  );
}

export default App;
