"use client";

import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 2px solid #d1e7dd;
  color: #2b2b2b;
  background-color: #fff;
  padding-left: 72px;
  padding-right: 72px;
`;

const FooterContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterColumn = styled.div``;

const Logo = styled.img`
  width: 160px;
  margin-bottom: 24px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  img {
    width: 26px;
    height: 26px;
  }
`;

const FooterTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1.2rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterItem = styled.li`
  margin-bottom: 16px;

  a {
    text-decoration: none;
    color: #2b2b2b;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #d1e7dd;  
  text-align: left;
  padding: 0 16px 24px;
  font-size: 0.75rem;
  padding-top: 14px;


  p {
    margin-bottom: 14px;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo + Redes sociais */}
        <FooterColumn>
          <Logo src="/logo2.svg" alt="Logo Lacrei Saúde" />
          <SocialIcons>
            <a href="https://www.facebook.com/lacrei.saude/"><img src="/icon_face.png" alt="Facebook" /></a>
            <a href="https://www.instagram.com/lacrei.saude"><img src="/icon_insta.png" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/company/lacrei"><img src="/icon_linkedin.png" alt="LinkedIn" /></a>
            <a href="mailto:contato@lacreisaude.com.br"><img src="/icon_mail.png" alt="Email" /></a>
          </SocialIcons>
        </FooterColumn>

        {/* Lacrei Saúde */}
        <FooterColumn>
          <FooterTitle>Lacrei Saúde</FooterTitle>
          <FooterList>
            <FooterItem><a href="https://lacreisaude.com.br/quem-somos/">Quem Somos</a></FooterItem>
            <FooterItem><a href="https://lacreisaude.com.br/quem-somos/#proposito">Nosso Propósito</a></FooterItem>
            <FooterItem><a href="https://lacreisaude.com.br/quem-somos/#missao-visao-valores">Missão, Visão e Valor</a></FooterItem>
            <FooterItem><a href="https://lacreisaude.com.br/acessibilidade/">Acessibilidade</a></FooterItem>
          </FooterList>
        </FooterColumn>

        {/* Saúde */}
        <FooterColumn>
          <FooterTitle>Saúde</FooterTitle>
          <FooterList>
            <FooterItem><a href="https://paciente.lacreisaude.com.br/">Buscar atendimento</a></FooterItem>
            <FooterItem><a href="https://profissional.lacreisaude.com.br/">Oferecer atendimento</a></FooterItem>
          </FooterList>
        </FooterColumn>

        {/* Segurança e Privacidade */}
        <FooterColumn>
          <FooterTitle>Segurança e Privacidade</FooterTitle>
          <FooterList>
            <FooterItem><a href="https://lacreisaude.com.br/politica-de-privacidade/">Política de Privacidade</a></FooterItem>
            <FooterItem><a href="https://lacreisaude.com.br/termos-de-uso/">Termos de Uso</a></FooterItem>
            <FooterItem><a href="https://lacreisaude.com.br/direitos-de-titular/">Direitos de Titular</a></FooterItem>
          </FooterList>
        </FooterColumn>
      </FooterContent>

      <FooterBottom>
        <p>
          A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.
        </p>
        <p>
          Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site{" "}
          <a href="https://www.cvv.org.br">www.cvv.org.br</a>
        </p>
        <p>
          Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ:
          51.265.351/0001-65
        </p>
      </FooterBottom>
    </FooterContainer>
  );
}
