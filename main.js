const { exec } = require('child_process');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/', (req, res) => {
  const { namespace_id, message } = req.body;
  if (namespace_id && message) {
    const command = `curl --header "Content-Type: application/json" --request POST --data '{"namespace_id":"${namespace_id}","data":"${message}","gas_limit": 80000,"fee":2000}' http://localhost:26659/submit_pfb`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
      }
      try {
        const parsedOutput = JSON.parse(stdout);
        const { height, txhash } = parsedOutput;
        const signer = parsedOutput.logs[0].events[0].attributes[2].value;
        const result = {
          blockHeight: height,
          transactionHash: txhash,
          namespaceID: namespace_id,
          dataHex: message,
          signer,
          parsedOutput,
        };
        console.log(result);
        return res.status(200).send(JSON.stringify(result, null, 2));
      } catch (e) {
        console.log(e);
        return res.status(500).json(`Namespace ID: ${namespace_id}\nData Hex: ${message}\n\n\n${stdout}`);
      }
    });
  } else {
    return res.status(400).json({ message: 'Invalid request' });
  }
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
