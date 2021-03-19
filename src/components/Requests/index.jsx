/* eslint-disable max-len */
import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

import {
  Container,
  SubContainer,
  Input,
  Line,
  MailIcon,
  MiniMailIcon,
} from './styles';

export default function Requests() {
  return (
    <Container>
      <SubContainer>
        <h1>Request a list of headings</h1>
        <p>Please enter your email address to receive course titles, the topics will be emailed to you.</p>
        <Input placeholder="AfshinT2Y@gmail.com" />
        <Line>
          <AiFillCheckCircle fill="#29D089" />
          <span>Your email has been successfully registered, headlines will be sent to you soon.</span>
        </Line>
      </SubContainer>
      <SubContainer>
        <MailIcon />
        <MiniMailIcon />
      </SubContainer>
    </Container>
  );
}
