import React, { useState, useEffect } from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PopupEmoji from "./PopupEmoji";
import "fomantic-ui-css/semantic.min.css";

const DesktopContent = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/md/bio.md")
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <>
      <Divider hidden />
      <Grid stackable container relaxed>
        <Grid.Column width={5}>
          <Image circular src="pfp.png" />
          <Divider hidden />
          <PopupEmoji
            emojiName=":guitar:"
            popupContent="Classical guitarist"
            position="bottom center"
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <h1>About me</h1>
          <Divider />
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default DesktopContent;
