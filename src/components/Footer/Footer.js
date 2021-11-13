import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
  <LinkList>
    <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="860-303-4318">860-303-4318</LinkItem>
    </LinkColumn>
    <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:dtoth77@gmail.com">dtoth77@gmail.com</LinkItem>
    </LinkColumn>
    <linkColumn>
    <br />
      <SocialIcons href='https://github.com/DaveToth77'>
      <AiFillGithub size='3rem'/>
      </SocialIcons>
    </linkColumn>
    <linkColumn>
    <br />
      <SocialIcons href='https://linkedin.com/in/davidtoth77'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    </linkColumn>
  </LinkList>
</FooterWrapper>);
};

export default Footer;
