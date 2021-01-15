# DESAFIO INGAIA - API (PREÇO FIXO DO METRO QUADRADO)

### Como Utilizar

Acesse a documentação para mais detalhes como utilizar as rotas https://ingaia-fixed-price.herokuapp.com/docs

### Como utilizar o projeto localmente

- Certifique-se de ter o npm e o docker instalado em sua máquina.


Clone o repositório e acesse a pasta, digite o comando abaixo para poder realizar a instalação das dependências:

```
npm install
```
 
 Após instalar as dependencias vamos criar nosso container PostgreSQL. Abra um terminal em sua máquina e digite o comando abaixo:
 
 ```sh
 docker run --name ingaia -e POSTGRES_PASSWORD=docker -d postgres
 ```
 
 Oque está linha de comando faz e criar uma instancia do postgres, passando a variavel de ambiente com a senha, que nosso caso é docker.
 Após realizar a criação da instância. Vamos configurar nosso env vars, dentro do terminal na pasta do projeto execute o comando abaixo:
 
 ```sh
 cp .env.example .env
 ```
 
 Após executar esse comando você poderá abrir o arquivo .env em um editor de sua preferência, para realizar as configurações das variavéis de ambiente. Feito a configuração das variaveis, execute no terminal, o seguinte comando:
 
 ```sh
 npm run typeorm migration:run
 ```
 
 O comando acima irá se certificar de criar todas as tabelas no seu banco de dados. E por fim é so executar o comando abaixo:
 
 ```sh
 npm run dev:server
 ```
