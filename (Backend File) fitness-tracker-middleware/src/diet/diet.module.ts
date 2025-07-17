import { Module } from '@nestjs/common';
import { DietService } from './diet.service';
import { DietController } from './diet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DietSchema } from './diet.schema';
import { MealModule } from '../meal/meal.module'; 


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Diet', schema: DietSchema }]),
    MealModule
  ],
  providers: [DietService],
  controllers: [DietController],
  exports: [DietService]
})
export class DietModule {}
