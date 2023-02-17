FROM node:latest

LABEL \
maintainer='joker joker_zzp@qq.com'\
version="1.0"

RUN \
yarn config set registry https://registry.npm.taobao.org &\
npm config set registry https://registry.npm.taobao.org

EXPOSE 3000
WORKDIR /usr/src/app
