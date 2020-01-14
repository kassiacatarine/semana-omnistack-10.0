# Semana Omnistack 10.0
Repositório para armazenar a pratica realizada na Semana OmniStack 10.0 da RocketSeat

## Backend NodeJs

Servidor backend de um crud de devs.

### Instruções de Uso

O primeiro passo para configurar e executar a api é entrar na pasta que contem o código, essa ação pode ser realizada executando o seguinte comando:

    cd backend


Após a entrada no diretório e necessário configurar a string de conexão ao banco, sendo assim crie um arquivo denominado `.env` e cópie o conteúdo existe no arquivo `.env.example` e adicione os valores correspondentes no arquivo criado.

A seguir encontra-se os passos a passos para execução do servidor:

1. Yarn

    1.1 Instalar as dependências

        yarn install

    1.2 Iniciar o servidor

        yarn dev
        
2. Npm

    2.1 Instalar as dependências

        npm install

    2.2 Iniciar o servidor

        npm run dev

Depois que todas essas configurações for realizadas o servidor está pronto para acesso por meio da seguinte url `http://localhost:3000/`.

### Rotas

#### DEVS

- GET DEVS

        http://localhost:3000/devs

- GET SEARCH DEVS

        http://localhost:3000/devs/search

- POST DEVS

        http://localhost:3000/devs
