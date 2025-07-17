import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadService {

    constructor(
        @InjectModel('Lead') private readonly leadModel: Model<any>
      ) {}

    async createLead(createLeadDto: CreateLeadDto) {
   
        const created = new this.leadModel({
            ...createLeadDto
        });
        return created.save();
    }

    async getLead() {
        return this.leadModel.findOne({ });
    }
}
