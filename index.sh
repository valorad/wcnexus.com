#!/bin/sh
# This file is used to change permission for a normal user on docker container run.

username=$EXEC_USER

## production settings

# sudo -u $username /bin/sh <<BLOCK
# npm start
# BLOCK

## dev running as root to see output in teminal
chmod -R 777 /dist/server/config
chmod -R 777 /dist/server/static
npm start
sudo -u $username /bin/sh
chmod -R 755 /dist/server/config
chmod -R 755 /dist/server/static