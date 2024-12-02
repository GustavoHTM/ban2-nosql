# Projeto de Banco de Dados com MongoDB

Este repositório contém o projeto de faculdade de banco de dados, utilizando **MongoDB**, um banco de dados NoSQL.

## Estrutura do Projeto

O repositório está organizado em dois diretórios principais:

1. **gymesc_core**: Contém o backend da aplicação.
2. **gymesc_web**: Contém o frontend da aplicação, desenvolvido com Angular.

---

## Como Rodar o Projeto

### 1. Rodando o Frontend (`gymesc_web`)

O frontend utiliza **Angular CLI** e roda em um container Docker. Para executar:

1. Navegue até o diretório `gymesc_web`:

   ```bash
   cd gymesc_web
   ```
2. Execute o comando para subir o projeto:

   ```bash
   docker compose up --build
   ```
3. O frontend estará disponível em: http://localhost:4200

---

### 2. Configurando o Backend (`gymesc_core`)

Antes de executar o backend, é necessário configurar o acesso ao banco de dados MongoDB:

1. Descubra o **IPv4 privado local** da sua máquina:
   - Normalmente começa com `192.168.XXX.XXX`.
   - No Windows, você pode usar o comando `ipconfig`.
   - No Linux/Mac, use o comando `ifconfig` ou `ip addr`.

2. Edite o arquivo de `application.properties` no diretório `gymesc_core/src/main/resources/` e substitua o valor de `spring.data.mongodb.uri` pelo IP da sua máquina, seguindo o formato `mongodb://<SEU_IP_PRIVADO>:27017`.

3. Navegue até o diretório `gymesc_core` e suba o backend e o MongoDB usando Docker.
   ```bash
   cd gymesc_core
   docker compose up --build
   ```

4. O backend estará disponível na porta `8080` e o MongoDB na porta `27017`.

---

### 3. Restaurando o Banco de Dados

Na raiz deste repositório, você encontrará o arquivo `mongodb.dump`, que contém dados iniciais para o banco de dados. Para restaurar esses dados:

1. Realize a restauração do dump no MongoDB dentro do container.
2. Após restaurar os dados, você pode fazer login com as seguintes credenciais:

   - **Email**: `demo@gmail.com`
   - **Senha**: `1`

---

## Tecnologias Utilizadas

- **Frontend**: Angular CLI, rodando em Docker.
- **Backend**: Java e Spring, com integração ao MongoDB.
- **Banco de Dados**: MongoDB.

## Restaurando o dump

Para restaurar o dump no banco de dados caso esteja com dificuldade, talvez isso lhe ajude

    docker cp mongodb.dump gymesc_core-mongodb-1:/mongodb.dump
    docker exec -i gymesc_core-mongodb-1 /usr/bin/mongorestore --uri "mongodb://localhost:27017/gymesc" --archive=mongodb.dump
