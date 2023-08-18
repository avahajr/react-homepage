import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";
import "animate.css";

function MobileMenu() {
  const headerStyle = {
    padding: "15px",
  };
  const menuStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
  };

  const itemStyleExpanded = {
    flex: "0",
    width: "auto",
  };

  return (
    <div style={{ marginBottom: "110px" }}>
      <Menu borderless fixed="top" style={headerStyle}>
        <Container
          as="h2"
          style={{
            fontFamily: "Pixeboy",
            fontSize: "35px",
            alignItems: "center",
          }}
        >
          <img
            src="cat-logo.png"
            height="30px"
            style={{
              marginRight: "14px",
              top: "50%",
            }}
            alt="/"
          />
          Ava Hajratwala
        </Container>
      </Menu>
      <Menu fixed="bottom" icon="labeled" borderless style={menuStyle}>
        <Menu.Item style={itemStyleExpanded} as="a" href="/">
          <Icon name="home" />
          About
        </Menu.Item>
        <Menu.Item style={itemStyleExpanded} as="a" href="./devblog">
          <Icon name="file alternate" />
          Devblog
        </Menu.Item>
        <Menu.Item style={itemStyleExpanded} as="a" href="./project-hub">
          <Icon name="code" />
          Projects
        </Menu.Item>
        <Menu.Item style={itemStyleExpanded} as="a" href="./academics">
          <Icon name="graduation cap" />
          Academics
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default MobileMenu;
