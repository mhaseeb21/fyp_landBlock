import mongoose from "mongoose";

// Define the purchased property schema
const purchasedPropertySchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  // You can add more fields as needed
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the PurchasedProperty model
const PurchasedProperty = mongoose.model('PurchasedProperty', purchasedPropertySchema);

export default PurchasedProperty;
