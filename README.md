# Documentação - Lucas Vaz - Sitcon

## 1. Back-end

O backend (REST api) deste projeto foi desenvolvido em Node.js e Express, utilizando o TypeORM para lidar com a base de dados MySQL.
As rotas/endpoints estão documentadas no Imsonia caso solicitadas.

### Padrão de Projeto
Arquitetura Clean
Utilizei a arquitetura Clean para garantir a separação de responsabilidades, práticas que visam aperfeiçoar a manutenção do código a longo prazo. Dividi o código em camadas isoladas seguindo as diretrizes da Clean Architecture.
[Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

### Base de Dados SQL - AWS RDS
A base de dados MySQL está hospedada na AWS RDS. O diagrama UML a seguir apresenta a relação entre as entidades:

![image](https://github.com/lucasvazo/LucasVaz_Sitcon/assets/101674991/6359fd0f-ca47-4a5f-84aa-d60aa39dbbc6)

### Como rodar o projeto (REST API):
O repositório do back-end está disponível publicamente no link:
[Back-End - Sitcon Lucas Vaz](https://github.com/lucasvazo/sitcon-api).
Para rodar a api localmente após o clone:
1. Executar `npm i` ou `npm install` 
2. Carregar as variáveis de ambiente (.env) ao projeto.
3. Executar `npm run dev`.

## 2 - Frontend

O frontend foi desenvolvido em React com o auxílio do Tailwind CSS e a build foi feita com Vite. Adotei práticas da arquitetura SOLID e utilizei o Atomic Design para organizar os componentes de forma escalável e reutilizável.

### Padrão de Projeto
SOLID

Segui os princípios do SOLID para garantir um código mais limpo e coeso. Abordei principalmente as práticas de sinle responsibility, open/closed e dependency inversion.

Atomic Design

Utilizei o Atomic Design para organizar os componentes em diferentes níveis de abstração, como átomos, moléculas, organismos e templates.

### Como rodar o projeto (REST API):

1. Clonar o repositório e executar `npm i` ou `npm install` 
2. Executar `npm run dev`.
