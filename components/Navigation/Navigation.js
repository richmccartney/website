import NavigationItem from "./NavigationItem";

import "./Navigation.css";

const Navigation = ({ children }) => {
  return <nav className="Navigation">{children}</nav>;
};

Navigation.Item = NavigationItem;

export default Navigation;
