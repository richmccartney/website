const NavigationItem = ({ children, link }) => {
  return (
    <a className="Navigation-item" href={link}>
      {children}
    </a>
  );
};

export default NavigationItem;
