import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './meal.interface';
import { CreateMealDto } from './dto/create-meal.dto';

@Injectable()
export class MealService {
  constructor(@InjectModel('Meal') private readonly mealModel: Model<Meal>) {}

  async findAll(): Promise<Meal[]> {
    return this.mealModel.find().exec();
  }

  async suggestMeals(totalCalories: number, type: string) {
    const perMealCalories = totalCalories / 3;

    const getMeal = async (category: string) => {
      const mealSuggetion = await this.mealModel
        .findOne({
          category,
          calories: { $lte: perMealCalories },
          type,
        })
        .select('-_id -createdAt -updatedAt')
        .sort({ calories: -1 }) // most calories under the limit
        .exec();

      console.log({ category, mealSuggetion });
      return mealSuggetion;
    };

    const breakfast = await getMeal('breakfast');
    const lunch = await getMeal('lunch');
    const dinner = await getMeal('dinner');

    return {
      totalCalories,
      dietType:type,
      meals: {
        breakfast,
        lunch,
        dinner,
      },
      totalMacros: {
        calories:
          (breakfast?.calories || 0) +
          (lunch?.calories || 0) +
          (dinner?.calories || 0),
        protein:
          (breakfast?.protein || 0) +
          (lunch?.protein || 0) +
          (dinner?.protein || 0),
        carbs:
          (breakfast?.carbs || 0) + (lunch?.carbs || 0) + (dinner?.carbs || 0),
        fat: (breakfast?.fat || 0) + (lunch?.fat || 0) + (dinner?.fat || 0),
      },
    };
  }

  async generateMealPlan(totalCalories: number, dietType: string) {
    const perMealCalories = totalCalories / 3;

    const filter = {
      type: dietType.toLowerCase(),
      calories: { $lte: perMealCalories },
    };

    const [breakfast, lunch, dinner] = await Promise.all([
      this.mealModel.aggregate([
        { $match: { ...filter, category: 'breakfast' } },
        { $sample: { size: 3 } },
      ]),
      this.mealModel.aggregate([
        { $match: { ...filter, category: 'lunch' } },
        { $sample: { size: 3 } },
      ]),
      this.mealModel.aggregate([
        { $match: { ...filter, category: 'dinner' } },
        { $sample: { size: 3 } },
      ]),
    ]);

    return {
      totalCalories,
      dietType,
      meals: {
        breakfast,
        lunch,
        dinner,
      },
    };
  }

  async createMeal(dto: CreateMealDto) {
    const meal = new this.mealModel(dto);
    return meal.save();
  }

  async getMealsByType(type: string) {
    return this.mealModel.find({ type });
  }
}
