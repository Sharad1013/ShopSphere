import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";

// register controller
export const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Something is Missing",
      });
    }

    // already existing user
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.json({
        message: `User already exists please try to login`,
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ userName, email, password: hashPassword });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: `Account Created Successfully`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error Occured",
    });
  }
};

// login controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: `Something is Missing`,
        success: false,
      });
    }

    // check for the existence

    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return res.json({
        success: false,
        message: `User doesn't exists! please register first`,
      });
    }

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch) {
      return res.json({
        success: false,
        message: `Invalid Credentials! Please try again `,
      });
    }

    // creating login token for the user
    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      "CLIENT_SECRET_KEY",
      { expiresIn: "60m" }
    );

    // storing the token in the cookies
    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: `Logged in successfully`,
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error Occured",
    });
  }
};

// logout controller
export const logoutUser = async (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully",
  });
};

// auth-middleware
export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorised user!",
      });
    }
    const decoded = jwt.verify(token, "CLIENT_SECRET_KEY");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised user!",
    });
  }
};
