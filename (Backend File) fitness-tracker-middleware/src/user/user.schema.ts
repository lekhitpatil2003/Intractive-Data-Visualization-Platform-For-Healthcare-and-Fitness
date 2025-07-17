import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    // Patient_ID:{ type: Number, required: false },
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: true },
    Mobile_Number:{ type: Number, required: true },
    Email_Id:{ type: String, required: true },
    Age: { type: Number, required: true },
    Gender:{ type: String, required: true },
    password: { type: String, required: true },
    profileImage:{ type: String, required: false },
    fitnessLevel: { type: String, required: false },
    goalDuration:{ type: Number, required: false },
    goal: { type: String,
        enum: ['lose', 'gain', 'maintain'],
        required: false
    },
}, {
    timestamps: true // Optional: adds createdAt and updatedAt fields
  });

export const ImageSchema = new Schema({
    profileImage: { type: String, required: true  },
});