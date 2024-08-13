

import { TMeetingRoom } from "./meetingRoom.interface";
import { Meeting } from "./meetingRoom.model";

const createMeetingRoomIntoDB = async (payload: TMeetingRoom) => {
  const result = await Meeting.create(payload);
  return result;
};
const getAMeetingRoomFromDB = async (payload:string) => {
  const result = await Meeting.findById(payload);
  return result;
};
const getAllMeetingRoomFromDB = async () => {
  const result = await Meeting.find();
  return result;
};
const updateMeetingRoomIntoDB = async (id: string,
  payload: TMeetingRoom) => {
  
  const result = await Meeting.findOneAndUpdate({_id:id},payload,{new:true});
  return result;
};
const deleteMeetingFRomDB = async (id: string,
  payload: TMeetingRoom) => {
  
  const result = await Meeting.findOneAndUpdate({_id:id},payload,{new:true});
  return result;
};
export const roomServices = {
  createMeetingRoomIntoDB,
  getAMeetingRoomFromDB,
  getAllMeetingRoomFromDB,
  updateMeetingRoomIntoDB,
  deleteMeetingFRomDB
};
