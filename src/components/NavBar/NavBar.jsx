import { NavLink } from "react-router-dom";
import Styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.item+ ' ' + Styles.profile}>
        <NavLink to="/Profile" activeClassName={Styles.activeLink}>
          Профиль
        </NavLink>
      </div>
      <div className={Styles.item + ' ' + Styles.message}>
        <NavLink
          className={Styles.a}  
          
          to="/Dialogs"
          activeClassName={Styles.activeLink}
        >
          Сообщения
        </NavLink>
      </div>
      <div className={Styles.item}>
        <a className={Styles.a}>Новости</a>
      </div>
      <div className={Styles.item}>
        <a className={Styles.a}>Музыка</a>
      </div>
      <div className={Styles.item}>
        <a>Настройка</a>
      </div>
    </nav>
  );
}

export default NavBar;
