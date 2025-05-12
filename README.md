# lacrei-saude

A **lacrei-saude** é uma plataforma online que pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.
Esta página foi construída como desafio técnico para o programa de voluntariado de Front-End na Lacrei Saúde.

## Tecnologias Utilizadas

- **React**: Para construção da interface do usuário (UI).
- **Next.js**: Framework para renderização do lado do servidor e otimização de SEO.
- **TypeScript**: Para garantir a tipagem estática e reduzir erros em tempo de execução.
- **Styled Components**: Para estilização dos componentes.
- **Jest**: Framework para testes unitários e de integração.
- **React Testing Library**: Para facilitar o teste de componentes React.

## Instalação

Siga as etapas abaixo para configurar o projeto localmente em sua máquina:

### 1. Clone o repositório

```bash
git clone https://github.com/seuusuario/lacrei-saude.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```
A aplicação estará disponível em http://localhost:3000.

## Prévia da página construída

![Prévia](public/print.png)


## Testes

Este projeto usa o Jest e o React Testing Library para testar os componentes.

### Rodando os testes

Para rodar os testes de unidade e integração, execute o comando abaixo:

```bash
npm test
```

## Estrutura de Testes
A estrutura do projeto está organizada da seguinte forma:

```
lacrei-saude/
├── public/              # Arquivos públicos como imagens, fontes, etc.
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas principais da aplicação
│   ├── __tests__/       # Arquivos de teste
│   ├── styles/          # Estilos globais da aplicação
│   └── utils/           # Funções utilitárias
├── .gitignore           # Arquivos e pastas a serem ignorados pelo Git
├── jest.config.ts       # Configuração do Jest
├── tsconfig.json        # Configuração do TypeScript
└── package.json         # Dependências e scripts do projeto
```

