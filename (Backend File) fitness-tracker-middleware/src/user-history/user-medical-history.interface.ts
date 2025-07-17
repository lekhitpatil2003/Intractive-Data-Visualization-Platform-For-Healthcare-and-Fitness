export interface UserMedicalHistory 
{
    Patient_ID: string,
    Weight_kg: number,
    Height_cm: number,
    BMI:number,
    Disease_Type: string,
    Severity: string,
    Physical_Activity_Level: string,
    Daily_Caloric_Intake: number,
    Blood_Pressure_mmHg: number,
    Dietary_Restrictions: string,
    Allergies?: string,
    Preferred_Cuisine: string,
    Weekly_Exercise_Hours: number,
    Diet_Recommendation: string,
    Cholesterol_mg_dL: number,
    Glucose_mg_dL: number, 
}