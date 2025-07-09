import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
// import { AppService } from 'src/app.service';
import { InputService } from './input.service';
import { CreateInputDto } from './input.dto';

@Controller('input')
export class InputController {

    constructor(private readonly inputService: InputService) { }

    @Post("/create")
    async createData(@Body() createInputDto: CreateInputDto) {
        console.log('Incoming Data:', createInputDto);
        try {
            return await this.inputService.create(createInputDto)
            

        } catch (error) {
            throw new HttpException('Failed to create input', HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Get('/all')
    async findAll() {
        try {
            return await this.inputService.findAll();
        } catch (error) {
            throw new HttpException('Failed to find all', HttpStatus.INTERNAL_SERVER_ERROR)
        }

    }
}

