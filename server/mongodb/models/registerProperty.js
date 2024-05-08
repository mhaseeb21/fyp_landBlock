import mongoose from "mongoose";

const registerPropertySchema = new mongoose.Schema(
  {
    userId: String,
    ownerName: String,
    city: String,
    subArea: String,
    streetNumber: String,
    plotNumber: String,
    image1: String,
    image2: String,
    status: {
      type: Boolean,
      default: false, // Default value false
    },
    latitude: Number,
    longitude: Number

  }
);

const registerPropertyModel = mongoose.model("registerProperties", registerPropertySchema);
export default registerPropertyModel;
