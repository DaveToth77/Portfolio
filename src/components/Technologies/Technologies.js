import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a wide range of technologies in the web development world.
    From Front-end to Back-end
  </SectionText>
  <List>
    <ListItem>
      <DiReact size='3rem' />
      <listContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph></ListParagraph>
          Experience with <br />
          React.js <br />
          Javascript <br />
          HTML <br />
          CSS <br />
        </ListParagraph>
      </listContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size='3rem' />
      <listContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experience with <br />
          Node.js <br />
          MySql <br />
          Javascript <br />

        </ListParagraph>
      </listContainer>
    </ListItem>

  </List>
</Section>);

export default Technologies;
