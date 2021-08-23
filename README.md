<h1>API de reserva de veículos</h1>

<h2>💻 Sobre o projeto</h2>
<p>Esta API foi desenvolvida como parte do teste técnico solicitado pela SulAmérica. Trata-se de um sistema de cadastro e reservas de veículos.</p>

<h2>🛠 Ferramentas utilizadas</h2>
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
  
  <h2>🚀 Executando o projeto</h2>
  <p>Para executar esta API localmente é necessário que você tenha em sua máquina o Node, os gerenciadores de pacote NPM e/ou Yarn e o banco de dados MongoDB. Também será necessário a ferramenta de versionamento de códigos Git.</p>
  
  <p>Com estas ferramentas instaladas você deve, no terminal, acessar a pasta de destino escolhida para este projeto e clonar este repositório para a sua máquina usando o comando abaixo:</p>
  
  <code>
    git clone https://github.com/prmlimajr/sulamerica-teste-tecnico-backend.git
  </code>
  
  <p>Após terminar o processo de download do projeto, você deve acessar a pasta com o conteúdo baixado e executar o comando abaixo para instalar as dependências:</p>
  
  <code>
    npm install
  </code>
  
  <p>ou se preferir:</p>
  
  <code>
    yarn
  </code>
  
  <p>Após a instalação de todos os pacotes, é possível rodar o projeto localmente através do comando:</p>
  
  <code>
    npm run dev
  </code>
  <p>ou</p>
  <code>
    yarn dev
  </code>
  
  <p>Uma mensagem será exibida no console indicando que o servidor está sendo executado, na porta 8080, e que o MongoDB foi iniciado.<p>
  
  <p>Com o servidor em execução você pode acessar <a href='http://localhost:8080/docs'>http://localhost:8080/docs</a> para ganhar acesso à documentação da API com suas rotas e conteúdos necessários para acessá-las.</p>
  <p>Também é possível visualizar o conteúdo do banco de dados em <a href='http://localhost:8081'>http://localhost:8081</a>. Com o projeto rodando localmente a base é criada com o nome de <b>test</b> e populada com os dados iniciais.</p>
  
  <h2>🐋 Executando com o Docker</h2>
  <p>Recomenda-se usar o Docker com o Docker Compose para executar o projeto localmente. Com estas ferramentas não há necessidade de ter instalado e configurado localmente o Node ou o MongoDB.</p>
  
  <p>Na raiz do projeto encontra-se o arquivo Dockerfile e docker-compose.yml com as configurações necessárias para executar o projeto sem a necessidade de maiores preparações no ambiente local.</p>
  
  <p>Se optar por executar o projeto desta forma, deve-se executar o comando abaixo para fazer a instalação das imagens:</p>
  <code>
    docker build -t API .
  </code>
  
 <p>E depois, para rodar a imagem:</p>
 <code>
    docker run -p 8080:8080 API
 </code>
 
 <h3>Docker Compose</h3>
 <p>Se você tiver o docker compose instalado em sua máquina, tudo o que você precisa para executar o projeto é rodar o comando abaixo:</p>
 
 <code>
  docker-compose up
 </code>
 
 <h2>✔️ Testes</h2>
 <p>Foram implementados testes unitários no projeto com o Jest para garantir o correto funcionamento dos casos.</p>
 
 <p>Para executá-los, rodar no terminal o seguinte comando:</p>
 
 <code>
    yarn test
 </code>
 
 <h2>😯 Autor</h2>
<a href="https://www.linkedin.com/in/prmlimajr/">Paulo Lima</a>
