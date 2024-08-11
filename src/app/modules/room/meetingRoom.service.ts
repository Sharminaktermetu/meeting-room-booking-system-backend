
import { TMeetingRoom } from "./MeetingRoom.interface";
import { Meeting } from "./meetingRoom.model";

const createMeetingIntoDB = async (payload: TMeetingRoom) => {
  const result = await Meeting.create(payload);
  return result;
};
export const roomServices = {
  createMeetingIntoDB,
};
