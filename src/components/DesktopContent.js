import React, { useState, useEffect } from "react";
import { Grid, Image, Divider } from "semantic-ui-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
        <Grid.Column width={4}>
          <Image circular src="pfp.png" />
        </Grid.Column>
        <Grid.Column width={12}>
          <h1>About me</h1>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default DesktopContent;
