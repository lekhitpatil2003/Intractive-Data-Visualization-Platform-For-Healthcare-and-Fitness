
import { Schema, Types } from 'mongoose';

export const UserMedicalHistorySchema = new Schema(
  {
    Patient_ID: { type: Types.ObjectId, ref: 'User', required: true },
    Weight_kg: { type: Number, required: false },
    Height_cm: { type: Number, required: false },
    BMI:{ type: Number, required: false },
    Disease_Type: { type: String, required: false },
    Severity: { type: String, required: false },
    Physical_Activity_Level: { type: String, required: false },
    Daily_Caloric_Intake: { type: Number, required: false },
    Blood_Pressure_mmHg: { type: Number, required: false },
    Dietary_Restrictions: { type: String, required: false },
    Allergies: { type: String, required: false },
    Preferred_Cuisine: { type: String, required: false },
    Weekly_Exercise_Hours: { type: Number, required: false },
    Diet_Recommendation: { type: String, required: false },
    Cholesterol_mg_dL: { type: Number, required: false },
    Glucose_mg_dL: { type: Number, required: false }, 
    Diet_type: { type: String, required: false }, 
  },
  {
    timestamps: true,
    collection: 'user-medical-history',
  },
);

