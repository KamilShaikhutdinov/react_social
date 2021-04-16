import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img
        alt=" "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
      ></img>
      <div>
      <h1>My react social network</h1>
      </div>
    </header>
  );
}

export default Header;
