import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDietDto } from './dto/create-diet.dto';
import { diat } from './diet.interface';
import { MealService } from "../meal/meal.service";

@Injectable()
export class DietService {
    constructor(
        @InjectModel('Diet') private readonly dietModel: Model<diat>, private mealService: MealService
      ) {}

      async createUserPlan(CreateDietDto: CreateDietDto) {
       console.log({CreateDietDto})
        const suggestedMeals = await this.mealService.suggestMeals(CreateDietDto.calories, CreateDietDto.type);
        console.log({suggestedMeals});
        
        const existing = await this.dietModel.findOne({ Patient_ID:CreateDietDto.Patient_ID });
        console.log({existing});

        if(existing){
          return await this.dietModel.findOneAndUpdate(
            { Patient_ID: CreateDietDto.Patient_ID },
            { $set: {type:CreateDietDto.type, fitnessLevel:CreateDietDto.fitnessLevel, calories:CreateDietDto.calories, goalDuration:CreateDietDto.goalDuration, mealPlan: suggestedMeals.meals, totalMacros:suggestedMeals.totalMacros} },
            { new: true },
          ).select("-__v -_id -Patient_ID -createdAt -updatedAt");
        }else{
          const plan = new this.dietModel({ ...CreateDietDto, mealPlan: suggestedMeals.meals, totalMacros:suggestedMeals.totalMacros });
          const savedPlan = await plan.save();
          const planObject = savedPlan.toObject() as any;

          delete planObject._id;
          delete planObject.__v;
          delete planObject.Patient_ID;
          delete planObject.createdAt;
          delete planObject.updatedAt;
          return planObject;
        }
      }
    
      async getUserPlan(Patient_ID: string) {
        return this.dietModel.findOne({ Patient_ID }).select("-__v -_id -Patient_ID -createdAt -updatedAt");
      }

}
