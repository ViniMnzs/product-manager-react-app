import React from 'react';

import {
  Container,
  SubContainer,
  Title,
  BackTitle,
  Collapse,
} from './styles';

export default function Questions() {
  const data = [
    {
      description: 'Does this course need any special requirements?',
    },
    {
      description: 'Who are the audiences of the product design period of the product factory?',
    },
    {
      description: 'Is it possible to pay by installments?',
    },
    {
      description: 'Can I start an internship after I finish the course?',
    },
    {
      description: 'What should I do after I finish the course?',
    },
  ];

  return (
    <Container>
      <SubContainer>
        <Title>Frequently Asked Questions</Title>
        <BackTitle>FAQ</BackTitle>
      </SubContainer>
      {
          data.map((value, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Collapse key={index}>
              <p>{value.description}</p>
              <h1>+</h1>
            </Collapse>
          ))
        }
    </Container>
  );
}
