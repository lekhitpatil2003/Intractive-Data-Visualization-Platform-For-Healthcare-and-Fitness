import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    Get,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { diskStorage } from 'multer';
  import { extname } from 'path';
  import { ImageService } from './image.service';
  import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
  import { UploadImageDto } from './user.dto';
  
  @ApiTags('Image')
  @Controller('image')
  export class ImageController {
    constructor(private readonly imageService: ImageService) {}
  
    @Post('upload')
    @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, cb) => {
            const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, unique + extname(file.originalname));
          },
        }),
      }),
    )
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: UploadImageDto })
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
      const result = await this.imageService.saveImage(file);
      return {
        message: 'Image uploaded successfully',
        data: result,
      };
    }
  
    @Get()
    async getAllImages() {
      return this.imageService.findAll();
    }
  }