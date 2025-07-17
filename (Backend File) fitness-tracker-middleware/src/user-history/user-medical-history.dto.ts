import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserMedicalHistoryDto {

    @ApiProperty({
            description: 'User Id',
            example: '1',
    })
    Patient_ID: string;

    @ApiProperty({
        description: 'User Weight',
        example: 50,
    })
    Weight_kg: number;

    @ApiProperty({
        description: 'User Height',
        example: 180,
    })
    Height_cm: number;

    @ApiProperty({
        description: 'User BMI',
        example: 20.5,
    })
    BMI:number;

    @ApiProperty({
        description: 'User Disease Type',
        example: 'Diabetes',
    })
    Disease_Type: string;

    @ApiProperty({
        description: 'Severity of Disease',
        example: 'Moderate',
    })
    Severity: string;

    @ApiProperty({
        description: 'User Physical Activity Level',
        example: 'Moderate',
    })
    Physical_Activity_Level: string;

    @ApiProperty({
        description: 'User Daily Caloric Intake',
        example: 2050,
    })
    Daily_Caloric_Intake: number;

    @ApiProperty({
        description: 'User Blood Pressure in mmHg',
        example: 120,
    })
    Blood_Pressure_mmHg: number;

    @ApiProperty({
        description: 'User Dietary Restrictions',
        example: 'None',
    })
    Dietary_Restrictions: string;

    @ApiProperty({
        description: 'User Allergies',
        example: 'Peanutes',
    })
    Allergies?: string;

    @ApiProperty({
        description: 'User Preferred Cuisine',
        example: 'Indian',
    })
    Preferred_Cuisine: string;

    @ApiProperty({
        description: 'User Weekly Exercise in Hours',
        example: 10,
    })
    Weekly_Exercise_Hours: number;

    @ApiProperty({
        description: 'User Diet Recommendation',
        example: 'Balanced',
    })
    Diet_Recommendation: string;

    @ApiProperty({
        description: 'User Cholesterol (mg/dL)',
        example: 50,
    })
    Cholesterol_mg_dL: number;

    @ApiProperty({
        description: 'User Glucose (mg/dL)',
        example: 160,
    })
    Glucose_mg_dL: number;

    
    @ApiProperty({
        description: 'Diet Type',
        example: "veg",
    })
    Diet_type: string;
}