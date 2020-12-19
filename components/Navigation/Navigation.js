import NavigationItem from "./NavigationItem";

import styles from "./Navigation.module.css";

const Navigation = ({ children }) => {
  return <nav className={styles.Navigation}>{children}</nav>;
};

Navigation.Item = NavigationItem;

export default Navigation;
