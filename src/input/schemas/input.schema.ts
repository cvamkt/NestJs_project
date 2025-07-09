import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InputData extends Document {
  @Prop([Number])
  x: number[];

  @Prop([Number])
  y: number[];
}

export const InputDataSchema = SchemaFactory.createForClass(InputData);
