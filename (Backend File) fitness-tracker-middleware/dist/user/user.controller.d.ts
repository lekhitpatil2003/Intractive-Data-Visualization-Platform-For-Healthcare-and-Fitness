import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { User } from './user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UserDto): Promise<User | null>;
    remove(id: string): Promise<User | null>;
}
