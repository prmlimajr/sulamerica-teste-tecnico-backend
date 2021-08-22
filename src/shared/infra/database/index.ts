import mongoose from "mongoose";

mongoose.connect("mongodb://mongo:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongodb = mongoose.connection;

mongodb.on("error", (err) => console.log("MongoDB failed to connect", err));
mongodb.once("open", () => console.log("MongoDB connected"));
