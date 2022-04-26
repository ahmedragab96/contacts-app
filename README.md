# How to run the app

## Using Docker

you have four scripts to build, run and deploy a new version of the app to heroku

## To run app locally

1. add strv-addressbook-ragab-ahmed.json that contains firebase credentials.
2. add .env file that contains DB URI and jwt secret
3. run `npm run docker:run`

## Deployment
App is deployed at https://strv-app.herokuapp.com/
To deploy new version just run `npm run heroku:deploy`
## Features in the app
1. endpoints logging using winston-express
2. firebase auth using custom tokens and claims
3. swagger documentaion can be found at https://strv-app.herokuapp.com/api-docs
4. Testing endpoints using supertest and jest
5. build and deploy scripts can be found at /scripts

