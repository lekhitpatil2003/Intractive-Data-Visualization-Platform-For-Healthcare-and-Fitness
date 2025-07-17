import { Model } from 'mongoose';
import { User } from './user.interface';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User | null>;
    update(id: string, updateUserDto: UserDto): Promise<User | null>;
    remove(id: string): Promise<any>;
}
