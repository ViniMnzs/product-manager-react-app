/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillPlayCircle,
} from 'react-icons/ai';

import {
  Container,
  Banner,
  SubContainer,
  Row,
  Logo,
  Title,
  BackTitle,
  Column,
  Line,
  LogoContainer,
} from './styles';

export default function AboutCard() {
  return (
    <Container>
      <Banner>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Line>
          <AiFillPlayCircle size={25} fill="#FFF" style={{ width: '10%' }} />
        </Line>
      </Banner>
      <SubContainer>
        <Title>About us</Title>
        <BackTitle>About</BackTitle>
      </SubContainer>
      <Column>
        <AiFillFacebook size={20} fill="#000" />
        <AiOutlineInstagram size={20} fill="#000" />
        <AiOutlineTwitter size={20} fill="#000" />
      </Column>
      <Row>
        <p>Today, given the economic and labor market conditions, the best and least risky way to invest is to invest in personal assets and skills. UI / UX Product Design Course covers all aspects of product design from product thinking and design to user-centric research and product research and business vision and digital marketing to product designers and creators, designing the end-user experience and interface of the product and how to deliver it. Includes. In this course, we have tried to use the presence of successful and experienced experts in each of the above mentioned areas to engage in more specialized interaction as a mentor. This course is project-oriented and participants in several product teams are working to improve their product quality. And then start competing with other teams in a healthy, learning-filled competition. Finally, after the final exam and competition, participants will be awarded a Certificate of Product Factory certification.</p>
      </Row>
    </Container>
  );
}
