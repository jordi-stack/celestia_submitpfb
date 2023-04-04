const crypto = require('crypto');
const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

function generateRandHexEncodedNamespaceID(seed) {
  const rand = crypto.createHash('sha3-256').update(seed.toString()).digest();
  return rand.slice(0, 8).toString('hex');
}

function generateRandMessage(seed) {
  const rand = crypto.createHash('sha3-256').update(seed.toString()).digest();
  const lenMsg = rand[0] % 100;
  return rand.slice(1, lenMsg + 1).toString('hex');
}

app.post('/', (req, res) => {
  const seed = parseInt(req.body.seed);
  if (seed && !isNaN(seed)) {
    const namespace_id = generateRandHexEncodedNamespaceID(seed);
    const data = generateRandMessage(seed);
    console.log(namespace_id, data)
    const command = `curl --header "Content-Type: application/json" --request POST --data '{"namespace_id":"${namespace>
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(stdout);
    });
  } else {
    res.status(400).json({ message: 'Invalid request' });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
