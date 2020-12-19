import styles from "./Header.module.css";

const Header = ({ children }) => {
  return <header className={styles.Header}>{children}</header>;
};

export default Header;
