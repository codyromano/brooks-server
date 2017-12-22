# Brooks Server

## Get started

1) Install MySQL dependencies
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install mysql
brew services start mysql
```
2) Using [MySQL Pro](https://www.sequelpro.com/) or another preferred MySQL client, import `./database/setup.sql`. You must execute the SQL dump as a user who has `CREATE USER` privileges.

3) Run `npm start` to start the API server.

Try:

- http://localhost:9980/article/id/1
- http://localhost:9980/article/id/2
- http://localhost:9980/table-of-contents/

