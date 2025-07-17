import { Controller, Get, Query } from '@nestjs/common';
import { MealService } from './meal.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateMealDto } from './dto/create-meal.dto';

@ApiTags('Meal')
@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @ApiOperation({ summary: 'Get all meal plans.' })
  @ApiResponse({ status: 200, description: 'List of all meal plans.' })
  @Get()
  findAll(): Promise<CreateMealDto[]> {
    return this.mealService.findAll();
  }

  @ApiOperation({ summary: 'Generate recommended meals plan for user' })
  @ApiResponse({ status: 200, description: 'List of recommended meals plan for user.' })
  @Get('generate-plan')
  async generatePlan(
    @Query('calories') calories: number,
    @Query('type') type: string,
  ) {
    return this.mealService.generateMealPlan(Number(calories), type);
  }

  @ApiOperation({ summary: 'Generate Single meals plan for user' })
  @ApiResponse({ status: 200, description: 'Single meals plan for user.' })
  @Get('generate-a-plan')
  async generateSinglePlan(
    @Query('calories') calories: number,
    @Query('type') type: string,
  ) {
    return this.mealService.suggestMeals(Number(calories), type);
  }
}
