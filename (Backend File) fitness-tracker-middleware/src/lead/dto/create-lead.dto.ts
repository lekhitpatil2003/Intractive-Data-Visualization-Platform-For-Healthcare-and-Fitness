import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLeadDto {
    @ApiProperty({
      description: 'Your Full Name',
      example: 'Lekhit Patil',
    })
    @IsString()
    name: string;

    @ApiProperty({
      description: 'Your Email Id',
      example: 'LekhitPatil@gmail.com',
    })
    @IsString()
    email: string;

    @ApiProperty({
      description: 'Your Phone Number',
      example: 9898989898,
    })
    phone: number;

    @ApiProperty({
      description: 'Your Query Type',
      example: "Other",
    })
    enquiryType: string;

    @ApiProperty({
      description: 'Your Query/Comment',
      example: "Your query or comment for enquiry",
    })
    comment:string
  }