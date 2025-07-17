export interface User extends Document {
    _id: string;
    Patient_ID: string;
    First_Name: string;
    Last_Name: string;
    Mobile_Number:number;
    Email_Id:string;
    Age: number;
    Gender: number;
    Password:string;
    profileImage?:string;
    packageSelected?:string;
    userType?:string;
    fitnessLevel?:string;
    goalDuration?:number;
  }

  export interface Image {
    _id: string;
    profileImage: string;
  }