import mongoose from "mongoose";

const KycSchema = new mongoose.Schema(
  {
    postal_address: String,
    city: String,
    verificationDocument: String,
    frontImage: String,
    backImage: String
  })
  const KycModel1 = mongoose.model("Kycs1", KycSchema);
  export default KycModel1;