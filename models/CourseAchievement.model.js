// const { Schema, model } = require("mongoose");

// const courseAchievementSchema = new Schema({
//   user: { type: Schema.Types.ObjectId, ref: "User", required: true },
//   username: { type: String, required: true },
//   courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
//   courseTitle: { type: String, required: true },
//   certificateUrl: { type: String },
//   completedAt: { type: Date, default: Date.now }
// }, { timestamps: true });

// module.exports = model("CourseAchievement", courseAchievementSchema);

const { Schema, model } = require("mongoose");

const courseAchievementSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true },

  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
  courseTitle: { type: String, required: true },

  mentorName: { type: String, required: true },
  authorityName: { type: String, required: true },

  certificateId: { type: String, required: true, unique: true }, // LAWCOACH-2025-0001
  qrCodeUrl: { type: String },

  completedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = model("CourseAchievement", courseAchievementSchema);
