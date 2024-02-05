import { Router } from "express";
import { authControllers } from "../../controllers";
import passport from "passport";

const authRoutes = Router();

authRoutes.post("/signUp", authControllers.signUp);
authRoutes.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("user", info);

      return res.status(401).send(info);
    } else {
      console.log("else", user);

      return res.status(200).send(user);
    }
  })(req, res, next);
});

export default authRoutes;
