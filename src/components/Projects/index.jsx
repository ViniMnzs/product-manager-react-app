/* eslint-disable max-len */
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import {
  Container,
  SubContainer,
  Line,
  GreyContainer,
  WhiteContainer,
  Page,
  Title,
  BackTitle,
  TitleContainer,
  Row,
} from './styles';

export default function Projects() {
  const data = [
    {
      id: 1,
      description: 'Experience teamwork in a real product team and a collaborative effort for a common goal.',
    },
    {
      id: 2,
      description: 'Survey real users and needs assessment and find the most suitable solution to their problems.',
    },
    {
      id: 3,
      description: 'Design experience from notebooks to user interface design software.',
    },
  ];

  return (
    <Container>
      <TitleContainer>
        <Title>Projects</Title>
        <BackTitle>Projects</BackTitle>
      </TitleContainer>
      <Row>
        <SubContainer>
          <h1>Design To Do List app</h1>
          <p>
            The previous student design project was the To Do List application product factory, The counter examples are the result of the efforts of the students and their teamwork in the first course.
          </p>
          {
              data.map((value) => (
                <Line key={value.id}>
                  <AiFillCheckCircle fill="#29D089" style={{ marginRight: '5%' }} />
                  <span>{value.description}</span>
                </Line>
              ))
          }
          <Page>
            4/15
          </Page>
        </SubContainer>
        <SubContainer>
          <GreyContainer>
            <WhiteContainer />
          </GreyContainer>
        </SubContainer>
      </Row>
    </Container>
  );
}
