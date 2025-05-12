"use client";

import React from "react";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ActionButton = styled.a`
  background-color: #018762;
  color: white;
  padding: 18px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #145f63;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  }
`;

const ActionButtons = () => {
  return (
    <ButtonsWrapper>
      <ActionButton
        href="https://paciente.lacreisaude.com.br/"
        rel="noopener noreferrer"
      >
        Buscar atendimento
      </ActionButton>
      <ActionButton
        href="mailto:contato@lacreisaude.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Compartilhar a minha história
      </ActionButton>
      <ActionButton
        href="https://lacreisaude.com.br/ajuda/"
        rel="noopener noreferrer"
      >
        Dúvidas Frequentes
      </ActionButton>
    </ButtonsWrapper>
  );
};

export default ActionButtons;
