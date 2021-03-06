const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;

let app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
