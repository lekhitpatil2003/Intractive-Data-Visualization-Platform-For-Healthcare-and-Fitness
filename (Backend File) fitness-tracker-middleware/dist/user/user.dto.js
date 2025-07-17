"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserDto {
    First_Name;
    Last_Name;
    Mobile_Number;
    Email_Id;
    Age;
    Gender;
}
exports.UserDto = UserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User First Name',
        example: 'Lekhit',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "First_Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Last Name',
        example: 'Patil',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "Last_Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Mobile Number',
        example: 9898989898,
    }),
    __metadata("design:type", Number)
], UserDto.prototype, "Mobile_Number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Email Id',
        example: 'Patil',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "Email_Id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Age',
        example: 21,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(18),
    __metadata("design:type", Number)
], UserDto.prototype, "Age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User Gender',
        example: 'Male',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserDto.prototype, "Gender", void 0);
//# sourceMappingURL=user.dto.js.map