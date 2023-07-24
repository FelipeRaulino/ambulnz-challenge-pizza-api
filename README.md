# Ambulnz Challenge

Esse projeto faz parte de um desafio da [Ambulnz](https://www.ambulnz.com/). Ele tem como objetivo a criação de uma API que forneça a possibilidade de registrar e gerenciar pedidos de Pizza. O desafio foi proposto em 2018 e, neste perfil, possui fins educativos.

**OBS:** O desafio foi encontrado em [@CollabCodeTech](https://github.com/CollabCodeTech/backend-challenges). Repositório destinado para pessoas que queiram testar suas habilidades através de desafios técnicos de vagas de trabalho.

## Principais Tecnologias
| **Tecnologia** |   |
|----------------|---|
| Node.js        | ✓ |
| Express        | ✓ |
| Typeorm        | ✓ |
| PostgreSQL     | ✓ |
| Docker         | ✓ |

## Como executar
**OBS:** Certifique-se de ter o Docker instalado em sua máquina.

Com o Docker, utilizando o Docker Compose para agilizar o processo de gerenciamento dos containers, foram criados dois serviços: Um do **banco de dados** e outro da **aplicação**.

### Executando a aplicação sem container Docker
Caso você não queira utilizar o serviço que criaria um container da aplicação via Docker, você pode subir apenas o serviço do **banco de dados**. Para isso execute na raiz do projeto:

``````
docker compose up -d ambulnz_db
``````

Altere o *host* em **db -> *AppDataSource.ts*** para 'localhost'.

Execute as migrations com: ``yarn run:migrations`` ou ``npm run run:migrations``

Execute a aplicação com: ``yarn dev`` ou ``npm run dev``

### Executando a aplicação com container Docker
Suba todos os serviços do Docker Compose com:
``````
docker compose up -d
``````

Para executar as migrations, você precisará ter acesso ao ambiente criado pelo Docker onde a aplicação está rodando, para isso execute no terminal após subir os serviços:
``````
docker exec -it ambulnz_pizza_api /bin/bash
``````
Já no ambiente, basta rodar as migrations com: 
 ``yarn run:migrations`` ou ``npm run run:migrations``

**OBS**: Você pode acompanhar os logs da aplicação em tempo real com: ``docker logs -f ambulnz_pizza_api``