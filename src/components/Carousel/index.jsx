/* eslint-disable global-require */
/* eslint-disable max-len */
import React from 'react';
import Image from '../../assets/images/carousel.png';

import {
  Container,
  Row,
  Column,
  Button,
  Logo,
} from './styles';

export default function Carousel() {
  return (
    <Container>
      <Row>
        <Column>
          <h1>Product Design Course</h1>
          <h3>Product Factory</h3>
          <span>
            Learn how design thinking, user research,
            business vision and marketing, and finally designing
            and creating real digital products for real users.
          </span>
          <Button><>Start Register</></Button>
        </Column>
        <Column>
          <Logo src={Image} alt="Carousel" />
        </Column>
      </Row>
    </Container>
  );
}
