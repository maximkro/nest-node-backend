import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({ example: 'it@it.it', description: 'email' })
    readonly email: string;

    @ApiProperty({ example: 'root', description: 'password' })
    readonly password: string;
}