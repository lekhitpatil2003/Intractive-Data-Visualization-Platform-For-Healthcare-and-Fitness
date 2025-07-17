import { Schema } from "mongoose";

export const DietSchema = new Schema({
    Patient_ID: { type: String, required: true },
    calories: { type: Number, required: true },
    type: { type: String, required: true },
    fitnessLevel: { type: String, required: true },
    goalDuration: { type: Number, required: true },
    mealPlan: { type: Array, required: true },
    totalMacros:{ type: Object, required: false },
    createdAt: { type: Date, default: Date.now }
  }, {
    timestamps: true // Optional: adds createdAt and updatedAt fields
  });