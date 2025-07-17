import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, UploadedFile, UseInterceptors, BadRequestException, Res, Patch } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDto, UploadImageDto, UpdateUserDto } from './user.dto';
import { User } from './user.interface';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  @Post()
  create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of all users.' })
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'The user details.' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto): Promise<User | null> {
    return this.userService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<User | null> {
    return this.userService.remove(id);
  }

  @ApiOperation({ summary: 'Get user image by name' })
  @ApiResponse({ status: 200, description: 'The user image fetch successfully.' })
  @Get('image/:filename')
  async serveImage(@Param('filename') filename: string, @Res() res: Response) {
    const file = `uploads/profiles/${filename}`;
    if (fs.existsSync(file)) {
      res.sendFile(file, { root: '.' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  }

  @ApiOperation({ summary: 'Update user image by name' })
  @ApiResponse({ status: 200, description: 'The user image fetch successfully.' })
  @Post(':id/upload-profile')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/profiles',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, unique + extname(file.originalname));
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new BadRequestException('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadImageDto })
  async uploadProfileImage(
    @Param('id') userId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const path = `${file.filename}`;
    const updatedUser = await this.userService.updateProfileImage(userId, path);
    return {
      statusCode:200,
      message: 'Profile image updated',
      data: updatedUser,
    };
  }

  @ApiOperation({ summary: 'Update user profile with image' })
  @ApiResponse({ status: 200, description: 'The user image fetch successfully.' })
  @Put(':id/profile')
  @UseInterceptors(
    FileInterceptor('profilePhoto', {
      storage: diskStorage({
        destination: './uploads/profiles',
        filename: (req, file, cb) => {
          const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, unique + extname(file.originalname));
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return cb(new BadRequestException('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    }),
  )
  @ApiConsumes('multipart/form-data')
  async uploadProfileWithImage(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
    @UploadedFile() profilePhoto: Express.Multer.File,
  ) {
    const imageUrl = profilePhoto?.filename;
    const updatedUser = await this.userService.updateProfile(id, body, imageUrl);
    return {
      message: 'Profile image updated',
      data: updatedUser,
    };
  }

}