import React from 'react';

import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import AboutCard from '../../components/AboutCard';
import ExpCard from '../../components/ExpCard';
import SessionsCard from '../../components/SessionsCard';
import MastersCard from '../../components/MastersCard';
import CourseCard from '../../components/CourseCard';
import Questions from '../../components/Questions';
import Requests from '../../components/Requests';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';

import { Container, Subcontainer } from './styles';

export default function Landing() {
  return (
    <>
      <Container>
        <Subcontainer>
          <Header />
          <Carousel />
          <AboutCard />
          <ExpCard />
          <SessionsCard />
          <MastersCard />
          <Questions />
          <CourseCard />
          <Requests />
          <Projects />
          <Footer />
        </Subcontainer>
      </Container>
    </>
  );
}
