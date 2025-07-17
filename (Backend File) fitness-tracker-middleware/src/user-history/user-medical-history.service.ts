import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserMedicalHistoryDto } from './user-medical-history.dto';
import { UserMedicalHistory } from './user-medical-history.interface';

@Injectable()
export class UserMedicalHistoryService {
  constructor(
    @InjectModel('UserMedicalHistory') 
        private readonly historyModel: Model<UserMedicalHistory>,
    ) {}

     async findAll(): Promise<UserMedicalHistory[]> {
        return this.historyModel.find().exec();
    }

    async getHistoryByUserId(Patient_ID: string): Promise<UserMedicalHistory[]> {

      console.log({Patient_ID})
        // return this.historyModel.find({ Patient_ID }).exec();
        const user = await this.historyModel.find({ Patient_ID }).exec();
        console.log({user})
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    async updateUserHistory(Patient_ID: string, updateData: UserMedicalHistoryDto): Promise<UserMedicalHistory | null> { // Return User or null
       
        const updated = await this.historyModel.findOneAndUpdate({Patient_ID}, {$set:updateData}, {
          new: true,
        }).exec();
    
        if (!updated) {
          throw new NotFoundException('User not found');
        }
    
        return updated;
    }

    async addUserHistory(userData: UserMedicalHistoryDto) {
        return await this.historyModel.create(userData);
    }
}