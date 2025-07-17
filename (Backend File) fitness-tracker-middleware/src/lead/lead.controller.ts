import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { LeadService } from './lead.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Controller('lead')
export class LeadController {
    constructor(private readonly leadService: LeadService) {}
    
    @Post()
    async create(@Body() createLeadDto: CreateLeadDto) {
        return this.leadService.createLead(createLeadDto);
    }
    
    @Get()
    async getByUser() {
        return this.leadService.getLead();
    }
}
