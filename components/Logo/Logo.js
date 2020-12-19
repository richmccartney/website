import PropTypes from "prop-types";

import styles from "./Logo.module.css";

const Logo = ({ children, link }) => {
  return (
    <a href={link} className={styles.Logo}>
      {children}
    </a>
  );
};

Logo.PropTypes = {
  /**
   * Logo children
   */
  children: PropTypes.node,
  /**
   * Logo link
   */
  link: PropTypes.string.isRequired,
};

export default Logo;
