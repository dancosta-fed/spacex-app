# Task Front-end | React, Next, Graphql, Chakra-UI;

Criação de três páginas para consumo da API da SpaceX com Graphql;

## Regras

- A estilização da interface deve ser priorizada pelo Chakra. Em casos que se sinta mais confortável criando sua própria estilização, **deve-se** utilizar styled-components;
- Os dados exibidos em uma página devem ser obtidos utilizando os métodos de Server Side Rendering fornecidos pelo **Next**, à fins de melhor rankeamento de SEO.
- Todas as requisições à API devem ser realizadas utilizando o Graphql, visando uma otimização dos dados recebidos.
- A interface deve ser simples, agradável e de fácil usabilidade.
- Deve-se seguir, a todo momento, a regra de componentização de toda a aplicação.

## Funcionamento

- A interface deve ser composta por três páginas:
  - Home:
    - Opção para ver informações da empresa;
    - Opção para buscar por foguetes;
  - Informações da empresa:
    - Todos os conteúdos citados abaixo sobre a empresa, em uma listagem sem pesquisa;
  - Busca de foguetes:
    - Input para busca com sugestões (buscadas da API). Ao selecionar uma opção no Input, listar as informações citadas abaixo sobre o foguete selecionado.

**Dados para listagem**:

    - Informações globais da empresa SpaceX:
        - CEO;
        - COO;
        - Ano de fundação;
        - Valuation;
        - Número de funcionários;
    - Listagem de um foguete:
        - Nome;
        - Descrição;
        - Status de atividade;
        - Empresa responsável;
        - Custo por lançamento;

## Tools

- Apollo Graphql SpaceX: [Playground](https://studio.apollographql.com/public/SpaceX-pxxbxen)
