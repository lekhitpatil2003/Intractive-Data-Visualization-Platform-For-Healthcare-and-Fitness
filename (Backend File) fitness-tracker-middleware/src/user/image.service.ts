import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Image } from './user.interface';
import { Model } from 'mongoose';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel('Image') private readonly imageModel: Model<Image>,
  ) {}

  async saveImage(file: Express.Multer.File): Promise<Image> {
    const createdImage = new this.imageModel({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
    });
    return createdImage.save();
  }

  async findAll(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }
}