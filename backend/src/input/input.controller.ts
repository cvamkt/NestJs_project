import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
// import { AppService } from 'src/app.service';
import { InputService } from './input.service';
import { CreateInputDto } from './input.dto';

@Controller('input')
export class InputController {

    constructor(private readonly inputService: InputService) { }

    @Post('/create')
    async createData(@Body() createInputDto: CreateInputDto) {
        try {
            return await this.inputService.create(createInputDto);
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

    @Get('/:id')
    async getOne(@Param('id') id: string) {
        try {
            return await this.inputService.findOneById(id);
        } catch (error) {
            throw new HttpException('Failed to fetch input', HttpStatus.NOT_FOUND);
        }
    }

    @Delete('/delete/:id')
    async deleteData(@Param('id') id: string) {
        try {
            const deleted = await this.inputService.delete(id);
            if (!deleted) {
                throw new HttpException('Input not found', HttpStatus.NOT_FOUND);
            }
            return {
                message: 'Deleted Successfully',
                deleteData: deleted,
            }
        } catch (error) {
            throw new HttpException('Failed to delete input', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Patch('/update/:id')
    async update(
        @Param('id') id: string,
        @Body() updateData: Partial<CreateInputDto>,
    ) {
        try {
            const updated = await this.inputService.update(id, updateData);

            if (!updated) {
                throw new HttpException('Input not Found', HttpStatus.NOT_FOUND);
            }

            return {
                message: 'Updated Successfully',
                updateData: updated,
            }
        } catch (error) {
            throw new HttpException('Failed to update input', HttpStatus.BAD_REQUEST)
        }
    }
}

