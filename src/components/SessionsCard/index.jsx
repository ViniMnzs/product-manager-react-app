/* eslint-disable max-len */
import React from 'react';
import { AiOutlineClockCircle, AiOutlineCalendar, AiFillPlayCircle } from 'react-icons/ai';
import Session from '../../assets/images/session.png';
import { data } from './mock';

import {
  Container,
  Logo,
  Line,
  SubLine,
  LabelContainer,
  Label,
  SubContainer,
  Title,
  TextContainer,
  Text,
  BackTitle,
} from './styles';

export default function SessionsCard() {
  return (
    <Container>
      <SubContainer>
        <Title>Sessions</Title>
        <BackTitle>Sessions</BackTitle>
      </SubContainer>
      {
        data.map((value) => (
          <>
            <SubContainer key={value.session}>
              <Line>
                <LabelContainer>
                  <Label><strong>{`${value.session} Session`}</strong></Label>
                  <Label>
                    <AiOutlineClockCircle size={16} />
                    6 hour
                  </Label>
                  <Label>
                    <AiOutlineCalendar size={16} />
                    Nov 5
                  </Label>
                  <Label>
                    <AiFillPlayCircle size={16} />
                    View
                  </Label>
                </LabelContainer>
              </Line>
            </SubContainer>
            <SubContainer key={value.session}>
              <SubLine>
                <Logo src={Session} />
                <TextContainer>
                  <Text>{value.text}</Text>
                </TextContainer>
              </SubLine>
            </SubContainer>
          </>
        ))
      }
    </Container>
  );
}
