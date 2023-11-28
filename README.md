# JOBAKI API - Documentação

## Descrição da API

A JOBAKI API é a interface de programação de aplicativos que alimenta a plataforma JOBAKI, facilitando a comunicação entre o front-end e o back-end. Esta documentação fornece informações essenciais sobre os endpoints, métodos e dados disponíveis para desenvolvedores que desejam interagir com a API.

## Endpoints Principais

1. **`/projetos`**
   - **Método:** GET
   - **Descrição:** Recupera a lista de projetos disponíveis na plataforma.

2. **`/projetos/{id}`**
   - **Método:** GET
   - **Descrição:** Obtém detalhes específicos de um projeto com base no ID fornecido.

3. **`/propostas`**
   - **Método:** POST
   - **Descrição:** Envia uma proposta de um freelancer para um projeto específico.

4. **`/propostas/{id}`**
   - **Método:** GET
   - **Descrição:** Obtém detalhes específicos de uma proposta com base no ID fornecido.

## Autenticação

Para acessar endpoints protegidos, é necessário incluir um token de autenticação no cabeçalho da solicitação.

```http
Authorization: Bearer SEU_TOKEN_AQUI

