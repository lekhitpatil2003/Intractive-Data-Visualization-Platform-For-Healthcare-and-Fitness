import { Document } from 'mongoose';

export interface Meal extends Document {
  name: string;
  calories: number;
  category: string;
  type: string;
  protein: number;
  carbs: number;
  fat: number;
}