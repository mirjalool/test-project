import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class UserEntity implements User{
    constructor(data: Partial<UserEntity>) {
        Object.assign(this, data);
    }
    @ApiProperty()
    id: number;
    
    @ApiProperty({required: false})
    firstName: string | null;
    @ApiProperty({required: false})
    lastName: string | null;
    
    @ApiProperty({required: false})
    email: string | null;
    @ApiProperty()
    username: string;
    @ApiProperty({required: false})
    phoneNumber: string | null;
    
    @ApiProperty()
    password: string;
    
    @ApiProperty()
    isAdmin: boolean;

    @ApiProperty()
    createdAt: Date;
    @ApiProperty()
    updatedAt: Date;
}
