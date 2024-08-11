import { model, Schema } from "mongoose";
import { TMeetingRoom } from "./MeetingRoom.interface";



const roomSchema = new Schema<TMeetingRoom>({
  name: {
    type: String,
    required: true,
  },

  roomNo: {
    type: Number,
    required: true,
  },
  floorNo: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  pricePerSlot: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Meeting = model<TMeetingRoom>("Meeting", roomSchema);
