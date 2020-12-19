import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";

const Home = () => {
  return (
    <Header>
      <Logo link="#logo">Logo</Logo>
      <Navigation>
        <Navigation.Item link="#logo">Link 1</Navigation.Item>
      </Navigation>
      <ThemeToggle />
    </Header>
  );
};

export default Home;
