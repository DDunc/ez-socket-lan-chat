EZ Socket LAN Chat
===

EZ Socket Lan Chat is real-time in-browser chat app using [Socket.io](http://socket.io/) and [Node.js](https://nodejs.org/en/) that's configured to be deployed online or through LAN. The server is configured to demonstrate basic server-side emitting in addition to passing data from client to client, but additional server logic is easy to add.

### install
```
npm install
```

### configure for local use
Start your local server on port 3000:

```
node app.js
```
Then enter the following in the terminal:

```
ipconfig getifaddr en0
```
or

```
ipconfig getifaddr en1
```
Now, anyone on your LAN who wants to connect should type the address + :3000 in order to join the chat.

### configure for online use
Deploy to your favorite service (Heroku, Docker, Digital Ocean, etc), change port in app.js if desired, then go to the page where it's hosted to start chatting!

