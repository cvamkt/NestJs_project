
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInputDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsString( { each: true })
    @IsNotEmpty()
    x: string[];

    @IsArray()
    @ArrayNotEmpty()
    @Type(() => Number)
    @IsNumber({}, { each: true })
    @IsNotEmpty()
    y: number[];

}