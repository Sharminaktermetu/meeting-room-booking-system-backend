
import httpStatus from "http-status";
import { roomServices } from "./meetingRoom.service";
import { Request, Response } from "express";

const createMeeting = async (req: Request, res: Response) => {
    try {
      const meeting = req.body;
 
  console.log(meeting);
      const result = await roomServices.getAMeetingRoomFromDB(meeting);
    
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
const getAMeetingRoom = async (req: Request, res: Response) => {
    try {
      const {id}  = req.params;
   
      const result = await roomServices.getAMeetingRoomFromDB(id);
   
      res.status(200).json({
        success: true,
        statusCode:httpStatus.OK,
        message: "Room retrieved successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
const getAllMeetingRoom = async (req: Request, res: Response) => {
    try {
     
   
      const result = await roomServices.getAllMeetingRoomFromDB();
   
      res.status(200).json({
        success: true,
        statusCode:httpStatus.OK,
        message: "Room retrieved successfully",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
const updateMeetingRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
console.log(id);
    try {
     
   
      const result = await roomServices.updateMeetingRoomIntoDB(id,
        updatedData);
   
      
        res.status(200).json({
          success: true,
          message: "room updated successfully!",
          data: result,
        
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const MeetingController={
    createMeeting,
    getAMeetingRoom,
    getAllMeetingRoom,
    updateMeetingRoom
  }