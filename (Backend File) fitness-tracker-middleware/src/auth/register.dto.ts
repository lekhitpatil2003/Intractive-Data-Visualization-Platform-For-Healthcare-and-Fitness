import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min } from 'class-validator';

export class RegisterDto  {
    @ApiProperty({
        description: 'User First Name',
        example: 'Lekhit',
      })
      @IsString()
      First_Name: string;
    
      @ApiProperty({
        description: 'User Last Name',
        example: 'Patil',
      })
      @IsString()
      Last_Name: string;
    
      @ApiProperty({
        description: 'Enter User Password',
        example: 'pass@123',
      })
      password: string;

      @ApiProperty({
        description: 'User Mobile Number',
        example: 9898989898,
      })
      Mobile_Number: number;
    
      @ApiProperty({
        description: 'User Email Id',
        example: 'LekhitPatil@gmail.com',
      })
      @IsString()
      Email_Id: string;
    
      @ApiProperty({
        description: 'User Age',
        example: 21,
      })
      @IsInt()
      @Min(18)
      Age: number;
    
      @ApiProperty({
        description: 'User Gender',
        example: 'Male',
      })
      @IsString()
      Gender: string;

      @ApiProperty({
        description: 'Current Fitness Level',
        example: 'Beginner',
        required:false
      })
      @IsString()
      fitnessLevel: string;
    
      @ApiProperty({
        description: 'Goal Duration',
        example: '15',
        required:false
      })
      @IsString()
      goalDuration: number;

      @ApiProperty({
        description: 'Goal',
        example: 'Gain',
        required:false
      })
      @IsString()
      goal: string;
}