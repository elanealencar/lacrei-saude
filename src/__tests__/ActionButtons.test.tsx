import { render, screen } from '@testing-library/react';
import ActionButtons from '../components/ActionButtons';
import { describe, it } from 'node:test';
import React from 'react';

describe('ActionButtons', () => {
    it('renderiza todos os três botões com texto correto', () => {
        render(<ActionButtons />);
    
        const buttons = screen.getAllByText('Buscar atendimento');
        expect(buttons[0]).toHaveAttribute('href', 'https://paciente.lacreisaude.com.br/');
        expect(screen.getByText('Compartilhar a minha história')).toHaveAttribute('href', 'mailto:contato@lacreisaude.com.br');
        expect(screen.getByText('Dúvidas Frequentes')).toHaveAttribute('href', 'https://lacreisaude.com.br/ajuda/');
      });

  it('verifica se os links dos botões estão corretos', () => {
    render(<ActionButtons />);
    
      // Verificar o link com o texto "Buscar atendimento"
  const buttonBuscarAtendimento = screen.getByRole('link', { name: 'Buscar atendimento' });
  expect(buttonBuscarAtendimento).toHaveAttribute('href', 'https://paciente.lacreisaude.com.br/');

  // Verificar os outros botões
  const buttonCompartilharHistoria = screen.getByRole('link', { name: 'Compartilhar a minha história' });
  expect(buttonCompartilharHistoria).toHaveAttribute('href', 'mailto:contato@lacreisaude.com.br');
  
  const buttonDuvidasFrequentes = screen.getByRole('link', { name: 'Dúvidas Frequentes' });
  expect(buttonDuvidasFrequentes).toHaveAttribute('href', 'https://lacreisaude.com.br/ajuda/');
});

});
