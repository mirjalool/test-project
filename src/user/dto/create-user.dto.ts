import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, isBoolean, isEmail, IsEmail, isNotEmpty, IsNotEmpty, isNumber, IsNumber, IsOptional, isString, IsString } from "class-validator";
import { inspect } from "util";

export class CreateUserDto {
  @IsNumber()
  @IsOptional()  
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  username: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty()
  isAdmin: boolean;
}

// DATABASE_URL="postgresql://postgres:123qazwsx@localhost:5432/testdb?schema=public"
