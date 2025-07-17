import { Module } from '@nestjs/common';
import { MealController } from './meal.controller';
import { MealService } from './meal.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MealSchema } from './meal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Meal', schema: MealSchema }])
  ],
  controllers: [MealController],
  providers: [MealService],
  exports: [MealService],
})
export class MealModule {}
