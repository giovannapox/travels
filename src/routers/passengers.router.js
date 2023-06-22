import { Router } from "express";
import { getPassenger,getPassengerPages } from "../controllers/passengers.controllers.js";
import httpStatus from "http-status";

const router = Router();

router.get("/health", (req, res) => res.sendStatus(httpStatus.OK));
router.get("/passengers/travels", getPassenger);
router.get("/passengers/travels/:page", getPassengerPages);

export default router;