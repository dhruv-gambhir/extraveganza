import mongoose from "mongoose";

/* Schema of how posts are stored */

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    
    username:{
      type:String,
      required: true,
    },

    description: String,
    picturePath: String,
    userPicturePath: String,
    ratings:Number,
    
    
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
