import React from "react";
import { Menu, Container } from "semantic-ui-react";

function DesktopHomepage() {
  return (
    <Menu borderless secondary pointing fixed="top">
      <Container>
        <img
          src="cat-logo.png"
          height="30px"
          style={{
            marginRight: "14px",
            top: "50%",
          }}
          alt="/"
        />
        <h1 className="logo"> Ava Hajratwala </h1>
        <Menu.Item as="a" href="./" active position="right">
          About
        </Menu.Item>
        <Menu.Item as="a" href="./devblog " position="right">
          Devblog
        </Menu.Item>
        <Menu.Item as="a" href="./project-hub" position="right">
          Projects
        </Menu.Item>
        <Menu.Item as="a" href="./academics" position="right">
          Academics
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default DesktopHomepage;
