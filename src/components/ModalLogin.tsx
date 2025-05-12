// src/components/ModalLogin.tsx
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ModalOverlay = styled.div`
  position: fixed;
  top: 80px;
  right: 140px;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  min-width: 212px;
  text-align: center;
  border: 1px solid rgb(203, 203, 203);
`;

const ModalTitle = styled.h2`
  margin-bottom: 24px;
  color: #333333;
`;

const ModalButton = styled.a`
  display: block;
  margin: 8px 0;
  padding: 12px;
  color: #black;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    background-color: #DFF2ED;
    border-left: 5px solid green;
  }
`;


interface ModalLoginProps {
  onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        
        <Link href="https://paciente.lacreisaude.com.br/">
          <ModalButton>Paciente</ModalButton>
        </Link>
        <Link href="https://profissional.lacreisaude.com.br/">
          <ModalButton>Profissional</ModalButton>
        </Link>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalLogin;
