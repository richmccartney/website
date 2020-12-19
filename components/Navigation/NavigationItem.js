import styles from "./Navigation.module.css";

const NavigationItem = ({ children, link }) => {
  return (
    <a className={styles.NavigationItem} href={link}>
      {children}
    </a>
  );
};

export default NavigationItem;
