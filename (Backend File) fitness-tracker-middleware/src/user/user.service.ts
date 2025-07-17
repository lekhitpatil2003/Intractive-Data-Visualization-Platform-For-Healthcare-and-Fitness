import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Image } from './user.interface';
import { UserDto, UploadImageDto, UpdateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userData: any): Promise<User> {
    const createdUser = new this.userModel({ ...userData });
    return createdUser.save();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ Email_Id:email }).exec();
  }

  async findByEmailPassword(email: string, password:string): Promise<User | null> {
    return this.userModel.findOne({ Email_Id:email, password }).select("-__v -createdAt -updatedAt -password").exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User | null> { // Return User or null
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UserDto): Promise<User | null> { // Return User or null
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  async findById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
  
  async updateProfileImage(userId: string, imagePath: string): Promise<User | null> {
    const user = await this.findById(userId);
    user.profileImage = imagePath;
    console.log({user})
    // new this.userModel({ ...user });
    // return await user.save();
    return this.userModel.findByIdAndUpdate(userId, user, { new: true }).exec();
  }

  async updateProfile(id: string, updateData: UpdateUserDto, profilePhoto: string): Promise<User | null> { // Return User or null
    console.log({updateData, profilePhoto})
    const updateFields: any = { ...updateData };
    if (profilePhoto) {
      updateFields.profileImage= profilePhoto;
    }
    
    console.log({updateFields})
    const updated = await this.userModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    }).select('First_Name Last_Name Mobile_Number Email_Id Age Gender packageSelected userType profileImage goalDuration fitnessLevel goal').exec();

    if (!updated) {
      throw new NotFoundException('User not found');
    }

    return updated;
  }

}