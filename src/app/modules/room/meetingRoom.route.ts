import express from 'express';
import { MeetingController } from './meetingRoom.controller';



const router = express.Router();

router.post("/",MeetingController.createMeeting);



export const RoomRouts = router;
