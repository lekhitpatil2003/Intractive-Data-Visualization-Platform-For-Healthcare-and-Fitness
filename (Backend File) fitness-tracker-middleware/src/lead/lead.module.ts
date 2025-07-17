import { Module } from '@nestjs/common';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadSchema } from './lead.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }])
  ],
  controllers: [LeadController],
  providers: [LeadService],
  exports: [LeadService]
})
export class LeadModule {}