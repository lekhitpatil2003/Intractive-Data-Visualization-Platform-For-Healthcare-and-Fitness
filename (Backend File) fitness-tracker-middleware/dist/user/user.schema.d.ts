import { Schema } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    First_Name: string;
    Last_Name: string;
    Mobile_Number: number;
    Email_Id: string;
    Age: number;
    Gender: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    First_Name: string;
    Last_Name: string;
    Mobile_Number: number;
    Email_Id: string;
    Age: number;
    Gender: string;
}>> & import("mongoose").FlatRecord<{
    First_Name: string;
    Last_Name: string;
    Mobile_Number: number;
    Email_Id: string;
    Age: number;
    Gender: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
