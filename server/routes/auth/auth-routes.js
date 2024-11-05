import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
} from "../../controllers/auth/auth-controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user; // getting from authMiddleware [req.user = decoded]
  res.status(200).json({
    success: true,
    message: "Authenticated User",
    user,
  });
});

export default router;
