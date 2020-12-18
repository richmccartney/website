import PropTypes from "prop-types";

import "./Logo.css";

const Logo = ({ children, link }) => {
  return (
    <a href={link} className="Logo">
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
