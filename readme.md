Metodos utilizados para criação do Docker;

docker build -t mysql-image -f api/db/Dockerfile .

as tags -t e -f significam respectivamente
Tag de identificação do Docker e Onde o arquivo Dockerfile esta localizado.

depois de rodar o comando é possivel verificar a imagem com o comando

docker image ls

para rodarmos a imagem podemos utilizar o comando abaixo

docker run -d --rm --name mysql-container mysql-image

as tags -d, --rm e --name significam respectivamente
comando para rodar o docker como daemon (em background), se o container já existir ele vai ser removido para que o novo seja criado, e name é o nome do container.

Podemos executar scripts dentro do docker com o seguinte comando para criar as tabelas de banco de dados

docker exec -i mysql-container mysql -uroot -pguilhermetosta < api/db/script.sql

a tag -i permite que o processo não será finalizado enquanto não rodar todo o arquivo de script primeiro. 
mysql-container é o nome do container que será executado o script e apos o nome o script em si.
-uroot é -u de usuario e root como nome do user
-pguilhermetosta é -p de pass e guilhermetosta como senha definida na env

para executar o docker utilize

docker exec -it mysql-container /bin/bash

-it é terminal

para criar um volume para o docker utiliza-se o comando run adicionando a TAG -v e informando a pasta local para ser utilizada como volume

docker run -d -v "C:\Users\guilh\Documents\git\docker\api\db\data:/var/lib/mysql" --rm --name mysql-container mysql-image 