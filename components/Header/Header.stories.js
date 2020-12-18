import React from "react";
import Header from "./Header";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";
import { ThemeToggle } from "../ThemeToggle";

export default { title: "Components/Header" };

export const Default = () => {
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
