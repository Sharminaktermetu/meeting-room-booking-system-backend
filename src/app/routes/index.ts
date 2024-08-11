import express from "express";
import { RoomRouts } from "../modules/room/meetingRoom.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/rooms",
    route: RoomRouts,
  }
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
