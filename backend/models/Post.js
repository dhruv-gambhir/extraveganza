import mongoose from "mongoose";

/**
 * Schema of how posts are stored
 * @property {string} userID - user id of the owner of the post
 * @property {username} username - username of the owner of the post
 * @property {string} description - content of post published by the post owner
 * @property {string} picturePath - address of image uploaded by post owner as part of the post
 * @property {string} userPicturePath - address of profile picture of post owner
 * @property {number} ratings - rating of the restaurant given by post owner
 */
const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    description: String,
    picturePath: String,
    userPicturePath: String,
    ratings: Number,


    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
