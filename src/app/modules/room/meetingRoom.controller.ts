
import httpStatus from "http-status";
import { roomServices } from "./meetingRoom.service";
import { Request, Response } from "express";

const createMeeting = async (req: Request, res: Response) => {
    try {
      const meeting = req.body;
 
  console.log(meeting);
      const result = await roomServices.createMeetingIntoDB(meeting);
    
      res.status(200).json({
        success: true,
        statusCode:httpStatus.OK,
        message: "Meeting is created successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const MeetingController={
    createMeeting
  }