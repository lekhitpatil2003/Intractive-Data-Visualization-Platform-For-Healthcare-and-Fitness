import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsIn } from 'class-validator';

export class CreateMealDto {
  @ApiProperty({
    description: 'Meal Name',
    example: 'Rajma Chawal',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Calories',
    example: 233,
  })
  @IsNumber()
  calories: number;

  @ApiProperty({
    description: 'Meal Category',
    example: 'breakfast',
  })
  @IsString()
  @IsIn(['breakfast', 'lunch', 'dinner'])
  category: string;

  @ApiProperty({
    description: 'Meal Type',
    example: 'veg',
  })
  @IsString()
  @IsIn(['veg', 'nonveg', 'vegan'])
  type: string;

  @ApiProperty({
    description: 'Protein',
    example: 7,
  })
  @IsNumber()
  protein: number;

  @ApiProperty({
    description: 'Calories',
    example: 8,
  })
  @IsNumber()
  carbs: number;

  @ApiProperty({
    description: 'Calories',
    example: 5,
  })
  @IsNumber()
  fat: number;
}