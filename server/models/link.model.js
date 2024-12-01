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
    },

    lastAccessed: {
      type: String,
    },
  },

  { Timestamp: true }
);
