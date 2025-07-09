
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInputDto {
    @IsArray()
    @ArrayNotEmpty()
    @Type(() => Number)
    @IsNumber({}, { each: true })
    @IsNotEmpty()
    x: number[];

    @IsArray()
    @ArrayNotEmpty()
    @Type(() => Number)
    @IsNumber({}, { each: true })
    @IsNotEmpty()
    y: number[];

}