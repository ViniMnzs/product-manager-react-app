/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import {
  Container,
  Banner,
  SubContainer,
  Row,
  Column,
  Title,
  Line,
  Text,
  BackTitle,
  Button,
  Strong,
  Span,
} from './styles';

export default function CourseCard() {
  const data = [
    {
      id: 1,
      description: 'Learn the requirements of a product designer from experienced professionals in the field.',
    },
    {
      id: 2,
      description: 'Experience in-team work and product designer interactions within the real product team.',
    },
    {
      id: 3,
      description: 'Experience working on projects with information and feature lists and real user recognition.',
    },
    {
      id: 4,
      description: 'Possibility to take Adobe exams upon completion of course and upon registration.',
    },
  ];

  return (
    <Container>
      <SubContainer>
        <Title>Course Fee</Title>
        <BackTitle>Course Fee</BackTitle>
      </SubContainer>
      <Row>
        <Column>
          <Strong>What will be our achievements by participating in this course?</Strong>
          {
            data.map((value) => (
              <Line key={value.id}>
                <AiFillCheckCircle size={22} fill="#29D089" />
                <Text>
                  {value.description}
                </Text>
              </Line>
            ))
          }
        </Column>
        <Banner>
          <s><h3>4,000,000 Toman</h3></s>
          <h5>2,300,000 Toman</h5>
          <span>Possibillty to pay periodic installment fee.</span>
          <Button><>Register</></Button>
        </Banner>
      </Row>
      <Span>Possibility of refund prior to the third session if the course quality is not satisfied.</Span>
    </Container>
  );
}
