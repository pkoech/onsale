const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(hello);
});
//dynamic port binding. Tells the server if we don't have another port idr 5000
var PORT_NUMBER = process.env.PORT || 5000;
app.listen(PORT_NUMBER);
