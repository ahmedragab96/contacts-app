PORT="${PORT:-5000}"
echo "Running on port: $PORT"
CONTAINER_ID=$(docker run -d -p $PORT:$PORT -e "PORT=$PORT" strv-addressbook-ragab-ahmed)
echo $CONTAINER_ID
docker logs -f $CONTAINER_ID
