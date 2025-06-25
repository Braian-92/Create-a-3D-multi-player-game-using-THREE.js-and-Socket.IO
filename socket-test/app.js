const app = require('express')();
const http = require('http').createServer(app);


app.get('/', (req, res) => {
  // res.send('Hello World');
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Server is running on port 3000');
});