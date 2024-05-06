docker build -t node-app .
docker run -p 3000:3000 node-app

docker tag node-app adelalghamdi1/node-app:v1.0
docker push adelalghamdi1/node-app:v1.0


