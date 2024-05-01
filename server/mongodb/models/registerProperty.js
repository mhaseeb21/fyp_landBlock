import mongoose from "mongoose";

const registerPropertySchema = new mongoose.Schema(
  {
    ownerName: String,
    city: String,
    subArea: String,
    streetNumber: String,
    plotNumber: String,
    image1: String,
    image2: String,
    location: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: [Number], // [longitude, latitude]
    },
  }
);

const registerPropertyModel = mongoose.model("registerProperties", registerPropertySchema);
export default registerPropertyModel;
