#!/bin/sh
# This file is used to change permission for a normal user on docker container run.

username=$EXEC_USER

# Add local user

userid=${EXEC_USER_ID}

echo "Starting with UID : $userid"
adduser $username -u $userid -D -H -s /bin/sh
# useradd --shell /bin/sh -u $userid -o -c "" -m user
# export HOME=/home/user
chown -R $username /dist
chmod -R 755 /dist
exec su-exec $username "$@"

## production settings

# sudo -u $username /bin/sh <<BLOCK
# npm start
# BLOCK

## dev running as root to see output in teminal
# chmod -R 777 /dist/server/config
# chmod -R 777 /dist/server/static
# npm start
# sudo -u $username /bin/sh
# chmod -R 755 /dist/server/config
# chmod -R 755 /dist/server/static