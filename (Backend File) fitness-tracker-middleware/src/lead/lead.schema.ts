import { Schema } from "mongoose";

export const LeadSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    enquiryType: { type: String, required: true },
    comment:{ type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }, {
    timestamps: true // Optional: adds createdAt and updatedAt fields
  });