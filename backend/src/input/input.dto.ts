
import { Type } from "class-transformer";
import {  IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInputDto {
    // @IsArray()
    // @ArrayNotEmpty()
    // @IsString( { each: true })
    @IsString()
    @IsNotEmpty()
    x: string;

    // @IsArray()
    // @ArrayNotEmpty()
    // @IsNumber({}, { each: true })
    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    y: number;

}