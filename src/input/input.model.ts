import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()

export class inputModel{
    @Field(() => [Number])
    x: number[];

    @Field(() => [Number])
    y: number[];
}