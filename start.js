const express = require('express');

const PORT = process.env.PORT || 5000;

let app = express();
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
