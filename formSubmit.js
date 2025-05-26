const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = require("./users.Schema");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(express.json);

mongoose
  .connect("mongodb://localhost:27017/formData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect the mongodb"))
  .catch((Error) => {
    console.log("error while connecting");
  });

app.post("/api/users", async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  console.log("req", req.body);

  const hashedPassword = bcrypt.hash(password, 10);
  const newUser = new userSchema({
    firstName,
    lastName,
    email,
    hashedPassword,
  });
  await newUser.save();
  res.status(200).json({ error: "Saved", user: newUser });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Mongodb coonnect at", PORT);
});
