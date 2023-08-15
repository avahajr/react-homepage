import React from "react";
import { Menu, Container, Grid } from "semantic-ui-react";

function DesktopHomepage() {
  return (
    <Grid as={Container}>
      <Grid.Column width={8}>
        <img
          src="cat-logo.png"
          className="cat logo"
          height="30px"
          style={{
            marginRight: "14px",
            width: "auto",
            marginTop: "20px",
          }}
          alt="/"
        />
        <h1 className="logo"> Ava Hajratwala </h1>
      </Grid.Column>
      <Grid.Column>
        <Menu secondary>
          <Menu.Item as="a" href="./" active position="right">
            About
          </Menu.Item>
          <Menu.Item as="a" href="./devblog ">
            Devblog
          </Menu.Item>
          <Menu.Item as="a" href="./project-hub">
            Projects
          </Menu.Item>
          <Menu.Item as="a" href="./academics">
            Academics
          </Menu.Item>
        </Menu>
      </Grid.Column>
    </Grid>
  );
}

export default DesktopHomepage;
