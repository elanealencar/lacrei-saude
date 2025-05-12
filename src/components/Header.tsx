"use client"

import React, {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ModalLogin from './ModalLogin';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: rgb(255, 255, 255)
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding-left: 72px;
  padding-right: 72px;
`;

const Logo = styled.img`
  height: 24px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 18px;
  font-weight: 600;
`;

const NavLink = styled.a`
  color: #018762;
  text-decoration: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;

  &:hover {
    text-decoration: none;
    background-color: #DFF2ED;
  }
`;

const EnterButton = styled.button`
  border: none;
  color: white;
  background-color: #018762;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  width: 140px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  

  &:hover {
    background-color:rgb(0, 85, 61);
  }
`;

const ArrowDown = styled.span`
  border: solid white;
  border-width: 0 2px 2px 0;
  padding: 4px;
  transform: rotate(45deg);
`;

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <Link href="#">
          <Logo src="/logo_lacrei.svg" alt="Logo Lacrei Saúde" />
        </Link>
        <NavLinks>
          <Link href="https://lacreisaude.com.br/quem-somos/">
            <NavLink>Quem Somos</NavLink>
          </Link>
          <Link href="https://lacreisaude.com.br/ajuda/">
            <NavLink>Ajuda</NavLink>
          </Link>
          <EnterButton onClick={handleModalToggle}>
            Entrar <ArrowDown />
          </EnterButton>
        </NavLinks>
      </HeaderContainer>
      {isModalOpen && <ModalLogin onClose={handleModalToggle} />}
    </>
    
  );
};

export default Header;
