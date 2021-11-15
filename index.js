const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(PORT, (req, res) => {
  console.log("Server started at port:", PORT);
});
