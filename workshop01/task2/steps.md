1. docker network create mynet

2. docker volume create northwind_data

3. docker run -d \
   -v northwind_data:/var/lib/mysql \
   --network mynet \
   --name mydb \
   stackupiss/northwind-db:v1

4. docker run -d \
   --network mynet \
   -e DB_HOST=mydb -e DB_USER=root -e DB_PASSWORD=changeit \
   -p 8080:3000 --name myapp \
   stackupiss/northwind-app:v1
