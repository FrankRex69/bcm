## Running the app
```bash
# Docker stop e remove (in root)
$ docker stop $(docker ps -a -q)
$ docker rm $(docker ps -a -q)

# Docker (in root)
$ docker network create proxy
$ docker-compose --env-file .env up (before you rename file backend/.env.example like backend/.env)


# PHPMYADMIN
http://localhost:8088/
user: root
pass: bcm

```
