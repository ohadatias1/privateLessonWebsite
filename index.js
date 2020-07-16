const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// start the server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
