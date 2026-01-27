import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, type ObjectId } from 'mongoose';
import { Types } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ required: true, unique: true })
  title: string;
  @Prop({ required: true })
  slug: string;
  @Prop({ required: true })
  content: string;
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: ObjectId;
  @Prop({ required: true, enum: ['draft', 'published'], default: 'draft' })
  status: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
