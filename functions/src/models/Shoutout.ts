import { ObjectId } from "mongodb";

// this is an interface
export default interface Shoutout {
  _id?: ObjectId;
  to: string;
  from: string;
  text: string;
}
