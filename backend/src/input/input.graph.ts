import { Query, Args, InputType, Mutation, Resolver } from "@nestjs/graphql";
import { InputService } from "./input.service";

import { CreateInputDto } from "./input.dto";
import { inputModel } from "./input.model";
// import { InputModule } from "./input.module";

@Resolver(() => inputModel)

export class InputResolver {
    constructor(private readonly inputService: InputService) { }

    @Query(() => [inputModel])
    async getAllInputs() {
        return this.inputService.findAll();
    }

    @Mutation(() => inputModel)

    async createInput(

        @Args('x', { type: () => String }) x: string,
        @Args('y', { type: () => Number }) y: number,
    ) {
        const createInputDto: CreateInputDto = {x,y};
        return this.inputService.create(createInputDto);
    }
}