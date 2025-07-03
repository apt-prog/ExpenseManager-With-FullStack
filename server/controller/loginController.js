import { userModel } from "../model/usermode.js";

export const LogInPageController = async (req, res) => {
  try {
    let { email, password } = req.body;
    let userFind = await userModel.findOne({ email });

    if (userFind) {
      if (password == userFind.password) {
        // ✅ Set session by user ID
        req.session.userId = userFind._id;

        console.log(`Welcome Back ${userFind.firstName} ✅`);
        return res.status(201).json({
          message: `Welcome Back ${userFind.firstName} ✅`,
          userId: userFind._id,
        });
      } else {
        console.log(`User ${userFind.firstName} Password Not Matched ❌`);
        return res.status(401).json({
          message: `User ${userFind.firstName} Password Not Matched ❌`,
        });
      }
    } else {
      console.log(`User Not Found ❌`);
      return res.status(400).json({ message: `User Not Found ❌` });
    }
  } catch (err) {
    console.log(`Some Error Is Have In The Login Page Controller ❌`, err);
    return res.status(500).json({
      message: "Some Error Is Have In The Login Page Controller ❌",
    });
  }
};
