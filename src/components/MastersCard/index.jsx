/* eslint-disable max-len */
import React from 'react';
import { data } from './mock';

import {
  Container,
  Logo,
  Line,
  SubContainer,
  Title,
  Text,
  BackTitle,
  Card,
} from './styles';

export default function MastersCard() {
  return (
    <Container>
      <SubContainer>
        <Title>Masters</Title>
        <BackTitle>Masters</BackTitle>
      </SubContainer>
      <SubContainer>
        <Line>
          {
            data.map((value) => (
              <Card key={value.name}>
                <Logo />
                <Text><strong>{value.name}</strong></Text>
                <Text>{value.description}</Text>
              </Card>
            ))
          }
        </Line>
      </SubContainer>
    </Container>
  );
}
