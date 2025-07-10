import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InputData extends Document {
  @Prop({  required: true })
  x: string;

  @Prop({ type: Number, required: true })
  y: number;
}

export const InputDataSchema = SchemaFactory.createForClass(InputData);
