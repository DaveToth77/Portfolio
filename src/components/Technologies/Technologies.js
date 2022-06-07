import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies in the web development
      world. From Front-end to Back-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Angular <br />
            React.js <br />
            Javascript <br />
            Typescript <br />
            HTML <br />
            CSS <br />
            Bootstrap
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <listContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            GraphQL <br />
            MySql <br />
            Javascript <br />
            Typescript
            <br />
            MongoDB <br />
            Express <br />
          </ListParagraph>
        </listContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
