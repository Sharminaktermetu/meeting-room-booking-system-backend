import express from 'express';
import { MeetingController } from './meetingRoom.controller';



const router = express.Router();

router.get("/:id",MeetingController.getAMeetingRoom);
router.post("/",MeetingController.createMeeting);
router.get("/",MeetingController.getAllMeetingRoom);
router.put("/:id",MeetingController.updateMeetingRoom);



export const RoomRouts = router;
