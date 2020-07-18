# HelpDesk

https://kiselevgleb.github.io/HelpDesk2/

Back server https://help-desk-backend2.herokuapp.com/
example reguest: https://help-desk-backend2.herokuapp.com/?method=allTickets

Front JS (github) + Back node JS koa (heroku)

## Repository with back server:
https://github.com/kiselevgleb/HelpDesk-backEnd

## Back server running Locally
For this Koa app to run you must be running node 0.11.*.
node --harmony server.js
Running on localhost:7070/?method=* (allTickets, ticketById, delById, createTicket)

## Front server running Locally
You need Webpack 4.41.6 or higher.
npm install
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production",

Running on localhost:9090
