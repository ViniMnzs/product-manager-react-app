import React from 'react';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

import { Container, Logo, IconsDiv } from './styles';

export default function Footer() {
  return (
    <Container>
      <IconsDiv>
        <AiFillFacebook size={20} fill="#000" />
        <AiOutlineInstagram size={20} fill="#000" />
        <AiOutlineTwitter size={20} fill="#000" />
      </IconsDiv>
      <Logo />
      <p>Contact Number: 0912-1234567</p>
    </Container>
  );
}
