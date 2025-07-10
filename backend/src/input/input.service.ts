import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InputData } from './schemas/input.schema';
import { Model } from 'mongoose';
import { Subject } from 'rxjs';
import { CreateInputDto } from './input.dto';

@Injectable()

export class InputService {
    constructor(
        @InjectModel(InputData.name)
        private inputModel: Model<InputData>,
    ) { }
    // POST
    async create(data: { x: string; y: number }) {
        const newData = new this.inputModel(data);
        return newData.save();
    }


    //GET
    async findAll() {
        return this.inputModel.find().exec();
    }

    //GetViaId
    async findOneById(id: string){
        return this.inputModel.findById(id).exec();
    }

    //update
    async update(id: string, updateData: Partial<CreateInputDto>) {
        return this.inputModel.updateOne(
           {_id: id},
           {$set: updateData}
        );
    }

    //Delete

    async delete(id: string) {
        return this.inputModel.findByIdAndDelete(id);
    }

}



// export class InputService {}
