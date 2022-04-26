# Make sure heroku cli is installed and you are logged in to the container registry
bash ./build.sh
heroku container:push -a strv-app web
heroku container:release -a strv-app web
heroku logs -a strv-app --tail
