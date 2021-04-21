import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.item+ ' ' + Styles.main}>
        <NavLink to="/main" activeClassName={Styles.activeLink}>
          Главная страница
        </NavLink>
      </div>
      <div className={Styles.item+ ' ' + Styles.profile}>
        <NavLink to="/Profile" activeClassName={Styles.activeLink}>
          Профиль
        </NavLink>
      </div>
      <div className={Styles.item + ' ' + Styles.message}>
        <NavLink
          className={Styles.a}  
          
          to="/news"
          activeClassName={Styles.activeLink}
        >
          Новости
        </NavLink>
      </div>
      
      <div className={Styles.item+ ' ' + Styles.auth}>
        <NavLink to="/login" activeClassName={Styles.activeLink}>
          Авторизация
        </NavLink>
      </div>
      
    </nav>
  );
}

export default NavBar;
