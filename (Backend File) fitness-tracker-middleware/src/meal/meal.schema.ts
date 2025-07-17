import { Schema } from "mongoose";

export const MealSchema = new Schema({
    name: { type: String, required: true },
    calories: { type: Number, required: true },
    protein: { type: Number, required: true },
    carbs: { type: Number, required: true },
    fat: { type: Number, required: true },
    category: { type: String, required: true }, // 'breakfast', 'lunch', 'dinner'
    type: { type: String, required: true },     // 'veg', 'nonveg', 'vegan'
  });