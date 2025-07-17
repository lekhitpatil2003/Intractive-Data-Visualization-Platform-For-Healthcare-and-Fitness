import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserMedicalHistoryService } from './user-medical-history.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserMedicalHistoryDto } from "./user-medical-history.dto"


@ApiTags('users-history')
@Controller('user-history')
export class UserMedicalHistoryController {
    constructor(private readonly service: UserMedicalHistoryService) {}

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of all users.' })
    @Get('')
    async findAll() {
        return this.service.findAll();
    }

    @ApiOperation({ summary: 'Get user of given id' })
    @ApiResponse({ status: 200, description: 'List of all users.' })
    @Get(':id')
    async getHistory(@Param('id') Patient_ID: string) {
        const userHistory = await this.service.getHistoryByUserId(Patient_ID);
        console.log({userHistory})
        return {
            statusCode:200,
            message: 'successfully',
            data:  userHistory.length > 0 ? userHistory[0] : null,
          };
    }

    @Post('')
      register(@Body() createUserDto: UserMedicalHistoryDto) {
        return this.service.addUserHistory(createUserDto);
      }


    @ApiOperation({ summary: 'Update user history' })
    @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
    @Put(':id')
    async update(@Param('id') Patient_ID: string, @Body() updateUserDto: UserMedicalHistoryDto) {
        const userHistory = await this.service.updateUserHistory(Patient_ID, updateUserDto);
        console.log({userHistory})
        return {
            statusCode:200,
            message: 'successfully updated',
        };
    }

     
    // @ApiOperation({ summary: 'Add user history' })
    // @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
    // @Post()
    // async create(@Body() createUserDto: UserMedicalHistoryDto) {
    //     console.log({createUserDto})
    //     const userHistory = await this.service.addUserHistory(createUserDto);
    //     console.log({userHistory})
    //     return {
    //         statusCode:200,
    //         message: 'successfully Added',
    //     };
    // }

    // @ApiOperation({ summary: 'Add user history' })
    // @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
    // @Post()
    // async create(createUserDto: any){
    //     console.log({createUserDto})
    //     const addValue =  await this.service.addUserHistory(createUserDto);
    //     console.log({addValue})
    //     return {
    //         statusCode:200,
    //         message:"success"
    //     }
    // }
}