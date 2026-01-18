import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, type ObjectId } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  slug: string;
  @Prop({ required: true })
  content: string;
  @Prop({ required: true })
  author: ObjectId;
  @Prop({ required: true, enum: ['draft', 'published'], default: 'draft' })
  status: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
