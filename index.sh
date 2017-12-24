#!/bin/sh
# This file is used to change permission for a normal user on docker container run.

username=$EXEC_USER

## production settings

# sudo -u $username /bin/sh <<BLOCK
# npm start
# BLOCK

## dev running as root to see output in teminal
npm start
sudo -u $username /bin/sh