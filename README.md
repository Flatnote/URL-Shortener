<h1 align="center">
  URL-Shortener
</h1>

<h4 align="center">Creating custom URL shortener With Nodejs</h4>

## Technologies

- ### Back end

  - [Express](https://expressjs.com/)- Nodejs framwork for building the REST Apis
  - [Mongodb](http://mongodb.com/)- Document oriented NoSQL database
  - [Mongoose](https://http://mongoosejs.com)- MongoDB object modeling tool
  - [Short-id](https://github.com/dylang/shortid)- Short id generator
  - [Valid-url](https://github.com/ogt/valid-url)- URI validation functions
  - [Nginx](https://www.nginx.com)- Nginx is event-based and asynchronous web server.

- ### Front end

  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [React-router](https://github.com/ReactTraining/react-router)- Complete routing library for React
  - [Materialize css](http://materializecss.com/)- Responsive front-end framework based on Material Design

### NOTE
- http://localhost:3000/ is a login page
- http://localhost:3000/home is a generate short URL page

### TO DO
- integrate an auth server (eg.firebase auth, auth0)

#### Run back end

```
# Move to server folder
cd server/
# Install dependencies
yarn install

# Start  server
yarn run start
```

#### Run front end

```
# Move to client folder
cd client/
# Install dependencies
yarn install
# Start  client
yarn run start
```

#### Modify nginx config

```
modify a nginx config like a default.conf from nginx/default.conf
```