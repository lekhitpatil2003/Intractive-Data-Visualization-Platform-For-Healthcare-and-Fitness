"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    First_Name: { type: String, required: true },
    Last_Name: { type: String, required: true },
    Mobile_Number: { type: Number, required: true },
    Email_Id: { type: String, required: true },
    Age: { type: Number, required: true },
    Gender: { type: String, required: true },
});
//# sourceMappingURL=user.schema.js.map