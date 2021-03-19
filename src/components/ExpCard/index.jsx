/* eslint-disable max-len */
import React from 'react';

import {
  Container, Logo, Line, Button, SubContainer, Title, TextContainer, Text, BackTitle,
} from './styles';

export default function ExpCard() {
  return (
    <Container>
      <SubContainer>
        <Title>Course Experience</Title>
        <BackTitle>Experience</BackTitle>
      </SubContainer>
      <SubContainer>
        <Line>
          <Button>After attending the couse</Button>
          <Button>During the period</Button>
          <Button last>Before attending the couse</Button>
        </Line>
      </SubContainer>
      <SubContainer>
        <Logo />
        <TextContainer>
          <Text>
            This course has been attempted by zero people who are eager to learn product design,
            especially user experience and user interface, so it is not a prerequisite, but due to the
            limited capacity of the priority course with early enrolled people, others
            can participate
            in future courses.
            Obviously, the ability to use tools like Adobe Photoshop and
            Adobe Illustrator as well
            as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy.
          </Text>
        </TextContainer>
      </SubContainer>
    </Container>
  );
}
