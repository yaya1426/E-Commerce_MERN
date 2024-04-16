import express from "express";
import { getActiveCartForUser } from "../services/cartService";
import validateJWT from "../middlewares/validateJWT";

const router = express.Router();

router.get(
  "/",
  validateJWT,
  async (req: any, res) => {
    const userId = req?.user?._id;
    const cart = await getActiveCartForUser({ userId });
    res.status(200).send(cart);
  },
);

export default router;
