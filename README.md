# Meu App Financeiro

Este é um aplicativo financeiro desenvolvido em **TypeScript** com **NestJS**. O objetivo é fornecer uma solução para controle de gastos e receitas, com o objetivo de mapear os gastos de maneira simples.

## Funcionalidades criadas

### Usuários
- **GET** `/u` - Listar usuários.
- **GET** `/u/:id` - Buscar usuário por ID.
- **GET** `/u/email/:email` - Buscar usuário por email.
- **POST** `/u` - Criar usuário.
- **PUT** `/u/:id` - Atualizar usuário.
- **DELETE** `/u/:id` - Deletar usuário.

### Futuras funcionalidades
- **Gastos e Receitas.**
- **Categorias.**
- **Métodos de pagamentos (dinheiro, cartão).**

## Tecnologias Utilizadas

- **NestJS**
- **TypeScript**
- **Prisma**

## Configuração e Execução

### Iniciando o projeto:
   ```bash
   git clone https://github.com/seu-usuario/meu-app-financeiro.git
   bun install
   bun run start:dev
