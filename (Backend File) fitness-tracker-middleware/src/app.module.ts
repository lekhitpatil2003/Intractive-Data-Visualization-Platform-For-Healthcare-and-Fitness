import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
// import { ImageModule } from './user/image.module';
import { UserMedicalHistoryModule } from './user-history/user-medical-history.module';
import { DietModule } from './diet/diet.module';
import { MealModule } from './meal/meal.module';
import { LeadModule } from './lead/lead.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),  // if you want to load environment variables
    MongooseModule.forRoot(`${process.env.MONGODB_URI}/fitness-tracker`),
    UserModule,
    AuthModule,
    // ImageModule
    UserMedicalHistoryModule,
    DietModule,
    MealModule,
    LeadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
