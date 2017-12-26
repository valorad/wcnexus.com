#!/bin/sh
# This file is used to change permission for a normal user on docker container run.

username=$EXEC_USER

# Add local user

userid=${EXEC_USER_ID}

echo "Summoning $username - UID:$userid ..."
adduser $username -u $userid -D -s /bin/sh
chown -R $username /dist
chmod -R 755 /dist
exec su-exec $username "$@"