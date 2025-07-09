import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InputData } from './schemas/input.schema';
import { Model } from 'mongoose';

@Injectable()

export class InputService{
    constructor(
        @InjectModel(InputData.name)
        private inputModel : Model<InputData>,
    ){}
    // POST
    async create (data: {x: number[]; y: number[]}){
        const newData = new this.inputModel(data);
        return newData.save();
    }

    //GET
    async findAll() {
        return this.inputModel.find().exec();
    }

}



// export class InputService {}
