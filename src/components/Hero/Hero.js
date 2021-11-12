import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello <br />
        My Name is Dave
      </SectionTitle>
      <SectionText>
      I am a Full Stack Web Developer that has skills in both front and back end applications. I enjoy using innovative techniques as well as a strong attention to detail to get a project done with the clients expectations not only met, but exceeded. I seek a role as a web developer at a company where I can learn, grow, and continue to master the craft. 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:dtoth77@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;