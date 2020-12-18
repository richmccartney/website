import React from "react";
import Navigation from "./Navigation";

export default { title: "Components/Navigation" };

export const Default = () => {
  return (
    <Navigation>
      <Navigation.Item link="#">Link 1</Navigation.Item>
    </Navigation>
  );
};
