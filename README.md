# Brooks Server

![](https://i.imgur.com/iQqZYyQ.gif)

## Get started

### Install and start MySQL server

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
```

### Check out the project 
```
git clone https://github.com/codyromano/brooks-server.git
```

### Set up MySQL

The following SQL dumps create a `brooks` database and a `brooksadmin` user. Additionally, they create and populate an `articles` table.

```
cd brooks-server
mysql -u root -p < database/setup.sql
mysql -u root -p < database/brooks.sql
```

### Start the server

**Development**

Run `npm start` to start the API server.

**Production**

To run the server permanently, use `screen` and `forever`. (I know there are easier ways to do this, but this works for now.)

> Note: You may need to change the paths depending on where your `npm` and `brooks-server` are installed.

```
npm install -g forever
screen
/usr/bin/forever /usr/bin/npm start --prefix /root/brooks-server
```

## Troubleshooting

If the server address is in use, find the process id using this command:
```
netstat -tulpn | grep :9980
```

## Explore

Try:

- http://localhost:9980/article/id/1
- http://localhost:9980/article/id/2
- http://localhost:9980/table-of-contents/

