import express from "express";
import sessions from "express-session";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectWithMongoDB } from "./config/db.js";
import { RegisterPageController } from "./controller/registerController.js";
import { LogInPageController } from "./controller/loginController.js";

const app = express();
const PORT = 5000;

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  sessions({
    name: "IncomeExpenseManager", // ✅ Your custom session name
    secret: process.env.SecretKey || "MySecretKey", // use .env for production
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: false, // true if using HTTPS
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

ConnectWithMongoDB();

app.get("/", (req, res) => {
  res.send("The Server Run Perfectly ✅");
});

app.post("/register", RegisterPageController);
app.post("/login", LogInPageController);
app.get("/check-auth", (req, res) => {
  if (req.session.userId) {
    return res.json({ isAuthenticated: true, userId: req.session.userId });
  } else {
    return res.status(401).json({ isAuthenticated: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server Runs On Port ${PORT} ✅`);
});
