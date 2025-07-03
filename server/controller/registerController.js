import { userModel } from "../model/usermode.js";

export const RegisterPageController = async (req, res) => {
  try {
    let finalObject = req.body;
    let email = req.body.email;
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "The User Is Already Registerd ❌" });
    }
    const newUser = new userModel(finalObject);
    await newUser.save();
    return res.status(201).json({ message: "The User Was Created ✅" });
  } catch (err) {
    console.log(`Some Error Is Have In The Register Page Controller ❌`);
    res.status(500).json({
      message: "Some Error Is Have In The Register Page Controller ❌",
    });
  }
};
