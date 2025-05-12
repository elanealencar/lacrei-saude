"use client"

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 8px 0;
`;


const Name = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
`;

interface StoryCardProps {
  name: string;
  title: string;
  text: string;
  image: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ name, title, text, image }) => {
  return (
    <CardContainer>
      <Image src={image} alt={name} />
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Name>{name}</Name>
      </Content>
    </CardContainer>
  );
};

export default StoryCard;
