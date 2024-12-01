const mongoose = require("mongoose");

const LinkSchema = mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    shortenedLink: {
      type: String,
      required: true,
    },
    //analytics
    clickCount: {
      type: Number,
      default: 0,
    },

    lastAccessed: {
      type: String,
      default: null,
    },
  },

  { Timestamp: true }
);

const LinkModel = mongoose.model("Link", LinkSchema, "linksharedata");
module.exports = LinkModel;
