# Brooks Server

## Get started

Install MySQL dependencies
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update
brew install mysql
brew services start mysql
mysqladmin -u root password '[password]'
```
Install global Node dependencies
```
npm i knex -g
```