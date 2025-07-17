import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { DietService } from './diet.service';
import { CreateDietDto } from './dto/create-diet.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User plan for diet')
@Controller('diet')
export class DietController {
  constructor(private readonly dietService: DietService) {}

  @ApiOperation({ summary: 'Create user plan.' })
  @ApiResponse({ status: 200, description: 'Create user plan.' })
  @Post()
  create(@Body() createDiedto: CreateDietDto) {
    return this.dietService.createUserPlan(createDiedto);
  }

  @ApiOperation({ summary: 'Get user plan by user id.' })
  @ApiResponse({ status: 200, description: 'Get user plan by user id.' })
  @Get(':id')
  async getPlan(@Param('id') Patient_ID: string) {
    const userPlan = await this.dietService.getUserPlan(Patient_ID);
    console.log({userPlan})
    return {
        statusCode:200,
        message: 'successfully',
        data:  userPlan,
    };

  }
}
