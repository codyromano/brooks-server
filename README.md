# Brooks Server

## Get started

1) Install MySQL dependencies

**Mac**
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install mysql
brew services start mysql
```
**Ubuntu**
```
sudo apt-get update
sudo apt-get install mysql-server
``

2) Check out the project 
```
git clone https://github.com/codyromano/brooks-server.git
```
3) Using [Sequel Pro](https://www.sequelpro.com/) or another preferred MySQL client, login as a user who has `CREATE USER` privileges. Execute the following SQL statements:

- [/database/setup.sql](https://github.com/codyromano/brooks-server/blob/master/database/setup.sql)
- [/database/brooks.sql](https://github.com/codyromano/brooks-server/blob/master/database/brooks.sql)

This does a few things:

- Creates a `brooks` database
- Creates a `brooksadmin` user
- Creates and populates an `articles` table

4) Run `npm start` to start the API server.

Try:

- http://localhost:9980/article/id/1
- http://localhost:9980/article/id/2
- http://localhost:9980/table-of-contents/

