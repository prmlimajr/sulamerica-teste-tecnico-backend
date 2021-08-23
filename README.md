# API de reserva de veículos

## 💻 Sobre o projeto<
Esta API foi desenvolvida como parte do teste técnico solicitado pela SulAmérica. Trata-se de um sistema de cadastro e reservas de veículos.

## 🛠 Ferramentas utilizadas
  <ul>
    <li>
      <a href='https://www.typescriptlang.org/'>Typescript</a>
    </li>
    <li>
      <a href='https://nodejs.org/en/'>NodeJS</a>
    </li>
    <li>
      <a href='https://expressjs.com/>Express</a>
    </li>
    <li>
      <a href='https://www.mongodb.com/pt-br'>MongoDB</a>
    </li>
    <li>
      <a href='https://mongoosejs.com/'>Mongoose ODM</a>
    </li>
    <li>
      <a href='https://jestjs.io/pt-BR/>Jest</a>
    </li>
    <li>
      <a href='https://www.docker.com/'>Docker</a>
    </li>
    <li>
      <a href='https://swagger.io/'>Swagger</a>
    </li>
  </ul>
  
  ## 🚀 Executando o projeto
  Para executar esta API localmente é necessário que você tenha em sua máquina o Node, os gerenciadores de pacote NPM e/ou Yarn e o banco de dados MongoDB. Também será necessário a ferramenta de versionamento de códigos Git.
  
  Com estas ferramentas instaladas você deve, no terminal, acessar a pasta de destino escolhida para este projeto e clonar este repositório para a sua máquina usando o comando abaixo:
  
  ```bash
    git clone https://github.com/prmlimajr/sulamerica-teste-tecnico-backend.git
  ```
  
  <p>Após terminar o processo de download do projeto, você deve acessar a pasta com o conteúdo baixado e executar o comando abaixo para instalar as dependências:</p>
  
  ```
    npm install
  ```
  
  ou se preferir:
  
  ```
    yarn
  ```
  
  Após a instalação de todos os pacotes, é possível rodar o projeto localmente através do comando:
  
  ```
    npm run dev
  ```
  ou
  ```
    yarn dev
  ```
  
  Uma mensagem será exibida no console indicando que o servidor está sendo executado, na porta 8080, e que o MongoDB foi iniciado.
  
  <p>Com o servidor em execução você pode acessar <a href='http://localhost:8080/docs'>http://localhost:8080/docs</a> para ganhar acesso à documentação da API com suas rotas e conteúdos necessários para acessá-las.</p>
  <p>Também é possível visualizar o conteúdo do banco de dados em <a href='http://localhost:8081'>http://localhost:8081</a>. Com o projeto rodando localmente a base é criada com o nome de <b>test</b> e populada com os dados iniciais.</p>
  
  ## 🐋 Executando com o Docker
  Recomenda-se usar o Docker com o Docker Compose para executar o projeto localmente. Com estas ferramentas não há necessidade de ter instalado e configurado localmente o Node ou o MongoDB.
  
  Na raiz do projeto encontra-se o arquivo Dockerfile e docker-compose.yml com as configurações necessárias para executar o projeto sem a necessidade de maiores preparações no ambiente local.
  
  Se optar por executar o projeto desta forma, deve-se executar o comando abaixo para fazer a instalação das imagens:
  ```
    docker build -t API .
  ```
  
 E depois, para rodar a imagem:
 ```
    docker run -p 8080:8080 API
 ```
 
 ### Docker Compose
 Se você tiver o docker compose instalado em sua máquina, tudo o que você precisa para executar o projeto é rodar o comando abaixo:
 
 ```
  docker-compose up
 ```
 
 ## ✔️ Testes
 Foram implementados testes unitários no projeto com o Jest para garantir o correto funcionamento dos casos.
 
 Para executá-los, rodar no terminal o seguinte comando:
 
 ```
    yarn test
 ```
 
 ## 😯 Autor
<a href="https://www.linkedin.com/in/prmlimajr/">Paulo Lima</a>
