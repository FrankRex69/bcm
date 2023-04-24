## Local environment initialization with Docker
```bash
# Docker stop e remove (in root)
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)

# Docker (in root)
$ docker network create proxy
$ docker-compose up (before you rename file backend/.env.example like backend/.env)
```

## DATABASE MYSQL SETUP
```bash
http://localhost:8088/
user: user
pass: password

# Create table
CREATE TABLE `users`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `username`      VARCHAR(50) NOT NULL ,
  `email`         VARCHAR(50) NOT NULL ,
  `password`      VARCHAR(50) NOT NULL ,
  `datainsert`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`username`(50))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;


# Insert admin account in table
INSERT INTO users(username,password,email) 
VALUES 
('admin','pwd','qwerty@asdfg.com')

```

## API REST INFO
```bash
# API User Authorization
METHOD: POST
URL: http://localhost:3000/authUser
payload: {
    "username": "admin",
    "password": "pwd"
}

RESPONSE: "User password valid !!"
RESPONSE-ERROR: "User and/or password not valid"


# API get all users database
METHOD: GET
URL: http://localhost:3000/getUsers
BASIC AUTH: Username (string), Password (string) [example: Username=admin, password=pwd]

RESPONSE: response data
RESPONSE-ERROR: "User and/or password not valid"
RESPONSE-ERROR: "missing credential" (case BASIC AUTH NOT PRESENT)


# API create new user into database
METHOD: POST
URL: http://localhost:3000/createUser
BASIC AUTH: Username, Password

payload: {
    "username": "Jeff",
    "password": "Bridget",
    "email": "kjhg@poiuyt.com"
}

RESPONSE: "Correct insert user with id: xyz"
RESPONSE-ERROR: "User and/or password not valid"
RESPONSE-ERROR: "missing credential" (case BASIC AUTH NOT PRESENT)
```


## Note
```bash
It's present script for validation only email
It's present script for sanitaze input

```
