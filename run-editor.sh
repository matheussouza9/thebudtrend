#/usr/env/bin bash

#export NODE_OPTIONS=--dns-result-order=ipv4first
local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem