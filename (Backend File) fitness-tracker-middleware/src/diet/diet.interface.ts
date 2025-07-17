import { Document } from 'mongoose';

export interface diat extends Document {
    email: String,
    calories: Number,
    type: String,
    fitnessLevel: String,
    goalDuration: Number,
    mealPlan: Array<any>,
}