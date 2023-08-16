
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


app.get('/api/info/:id', (req, res) => {
  const queryParam = req.query.param;
  const pathParam = req.params.id;

  res.json({
    info: {
      queryParam,
      pathParam,
    },
  });
});


app.post('/', (req, res) => {
  const data = req.body;

  const name = data.name;
  const age = data.age;

  res.json([name, age]);
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});