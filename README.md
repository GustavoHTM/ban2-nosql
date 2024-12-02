Esse repositório é para o projeto de faculdade de banco de dados onde estarei utilizando mongodb, um banco de dados nosql

Para rodar esse projeto você escontrará dois diretórios iniciais o gymesc_core e o gymesc_web
o gymesc_web terá o projeto web com o visual utilizando angular-cli rodando em um docker, então estando no diretório dele você pode rodar no terminal: "docker compose up --build" e isso irá subir o projeto web no http://localhost:4200

Agora no gymesc_web é necessário você descobrir seu IPv4 privado local que a princípio começa com 192.168.XXX.XXX, descobrindo ele, você pode ir no arquivo que está em gymesc_core/src/main/resources/application.properties
Nesse arquivo está um atributo declarado da seguinte forma: spring.data.mongodb.uri=mongodb://192.168.100.33:27017, na parte de IP você pode substituir pelo seu
Feito isso você pode rodar o comando "docker compose up --build" que isso irá subir a api na porta 8080 e o banco de dados mongodb na porta 27017

Haverá também na raiz desse repositório um arquivo mongodb.dump que terá conteúdo de banco de dados então você deve aplicar esse dump ao banco de dados caso queira ja iniciar com alguns dados já feitos
daí para utiliza-los você vai no projeto web pra fazer login e coloque essas credenciais:
email: demo@gmail.com
senha: 1
