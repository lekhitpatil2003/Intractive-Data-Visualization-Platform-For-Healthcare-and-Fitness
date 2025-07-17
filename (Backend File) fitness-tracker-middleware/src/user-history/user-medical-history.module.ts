import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMedicalHistorySchema } from './user-medical-history.schema';
import { UserMedicalHistoryService } from './user-medical-history.service';
import { UserMedicalHistoryController } from './user-medical-history.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserMedicalHistory', schema: UserMedicalHistorySchema },
    ]),
  ],
  controllers: [UserMedicalHistoryController],
  providers: [UserMedicalHistoryService],
  exports: [UserMedicalHistoryService]
})
export class UserMedicalHistoryModule {}