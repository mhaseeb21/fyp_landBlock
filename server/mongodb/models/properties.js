import mongoose from "mongoose";

// Define the property schema
const propertySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  area: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  // You can add more fields as needed
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the Property model
const Property = mongoose.model('Property', propertySchema);

export default Property;
