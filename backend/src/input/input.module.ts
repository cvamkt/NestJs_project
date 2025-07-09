import { Module } from '@nestjs/common';
import { InputService } from './input.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InputData, InputDataSchema } from './schemas/input.schema';
import { InputController } from './input.controller';
import { InputResolver } from './input.graph';

@Module({
  imports : [
    MongooseModule.forFeature([
      {name : InputData.name, schema : InputDataSchema}
    ]),
  ],
  controllers : [InputController],
  providers: [InputService, InputResolver],
})
export class InputModule {}
