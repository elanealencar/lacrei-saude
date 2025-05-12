"use client"

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoryCard from '../../components/StoryCard';
import styled from 'styled-components';
import ActionButtons from '@/components/ActionButtons';

const StoriesContainer = styled.div`
  padding: 32px;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  text-align: center;
  color: rgb(0, 85, 61);
  margin-bottom: 32px;
`;

const StoriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  gap: 24px;
  justify-content: center;
`;

const historias = [
  {
    id: 1,
    category: "Saúde Mental",
    name: "Luciana",
    title: "Me senti ouvida pela primeira vez",
    text: "Encontrei uma psicóloga na Lacrei que me acolheu como eu sou, sem julgamentos...",
    image: "/person-with-flag.png"
  },
  {
    id: 2,
    category: "Saúde Mental",
    name: "Maria",
    title: "Uma jornada de aceitação",
    text: "A Lacrei foi o primeiro lugar onde me senti confortável no meu atendimento",
    image: "/accessibility.png"
  },
  {
    id: 3,
    category: "Saúde Mental",
    name: "Adriano",
    title: "Atendimento diferenciado",
    text: "Uma plataforma que nos acolhe e nos respeita como somos",
    image: "/about-us.png"
  },
];


const HistóriasPage: React.FC = () => {
  return (
    <>
      <Header />
      <StoriesContainer>
        <Title>Histórias de Acolhimento</Title>
        <StoriesList>
          {historias.map((story) => (
            <StoryCard key={story.id} {...story} />
          ))}
        </StoriesList>
        <ActionButtons />

      </StoriesContainer>
      <Footer />
    </>
  );
};

export default HistóriasPage;
