import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNumber, IsString } from "class-validator";

export class CreateDietDto {
  @ApiProperty({
      description: 'User Id',
      example: 1,
  })
  Patient_ID: string;

  @ApiProperty({
    description: 'Calories',
    example: 1000,
  })
  @IsNumber()
  calories: number;


  @ApiProperty({
    description: 'Meal Type',
    example: 'veg',
  })
  @IsString()
  @IsIn(['veg', 'nonveg', 'vegan'])
  type: string;

  @ApiProperty({
    description: 'Fitness Level',
    example: 'beginner',
  })
  @IsString()
  @IsIn(['beginner', 'intermediate', 'advanced'])
  fitnessLevel: string;

  @ApiProperty({
    description: 'Goal Duration',
    example: 15,
  })
  @IsNumber()
  goalDuration: number; // days
}