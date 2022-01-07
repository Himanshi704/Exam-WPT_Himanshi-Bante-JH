const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const { addUser, selectAlluser } = require("./user");

//http://localhost:4000/user
app.get("/user", async (req, res) => {
  const list = await selectAlluser();
  res.json(list);
});

//http://localhost:4000/user-add
app.post("/user-add", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "user added sucessfully " });
});

app.listen(4000, () => console.log("server started"));
