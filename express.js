const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 5000;
const JWT_SECRET = "mysecretkey";

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/userdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo db connection establish"))
  .catch((error) => {
    console.log("Not connected", error);
  });

let userSchema = new mongoose.Schema({
  name: String,

  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded; // attach user info
    next(); // move to next route
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// app.post("/signup", async (req, res) => {
//   let { name, email, password } = req.body;
//   console.log("req,body", req.body);

//   try {
//     const existingUser = await User.findOne(email);
//     // console.log("existingUser", existingUser);

//     if (existingUser) res.status(400).json({ error: "User already exists" });
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // console.log("hashedPassword", hashedPassword);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: "User Authenticate" });
//   } catch (error) {}
// });

// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({ error: "User already exists" });

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // save user
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered" });
//   } catch (err) {
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // find user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    // generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/users", authMiddleware, async (req, res) => {
  let { name, password, email } = req.body;
  if (!name && !password && !email) {
    return res.status(400).json({ error: "Name ,email,no is required" });
  }
  let checkUser = await User.findOne({ email: email });
  if (checkUser)
    return res.status(400).json({ Message: "Already user email is present" });
  try {
    const newUser = new User({ name, password, email });
    await newUser.save();
    res.status(201).json({ message: "Saved User", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to save user" });
  }
});

app.get("/users", authMiddleware, async (req, res) => {
  try {
    console.log("in the get");

    let usersData = await User.find({});
    res.json(usersData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    let userId = req.params.id;

    let getUserById = await User.findById(userId);
    if (!getUserById) res.status(400).json({ error: "Not User Found" });
    res.json(getUserById);
  } catch (error) {}
});

app.put("/users/:id", async (req, res) => {
  let { name, number, email } = req.body;
  try {
    let users = await User.findByIdAndUpdate(req.params.id, {
      name,
      number,
      email,
    });
    if (!users) return res.status(400).json({ error: "User Not found" });
    res.json({ message: "Updated User", User: users });
  } catch (error) {}
});

app.delete("/users/:id", async (req, res) => {
  let userId = req.params.id;
  let deletedUsers = await User.findByIdAndDelete(userId);
  if (!deletedUsers) res.status(400).json({ error: "Not User Find" });
  res.json({ message: "User Deleted Succefully", User: deletedUsers });
});

// for authentication

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
