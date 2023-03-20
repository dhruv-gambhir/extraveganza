import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {

    username:{
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true, // prevent duplicate username
      // will receive error message,such as:
      //errmsg: 'E11000 duplicate key error collection: test.users index: username_1 dup key: { username: "aaa" }',
    },
    
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    //location: String,
    //occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  //dates of created
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
