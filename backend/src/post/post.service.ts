import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './scema/post.schema';

import { CreatePostDto } from './dto/createPostDto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const existingPost = await this.postModel
      .findOne({ title: createPostDto.title })
      .exec();
    if (existingPost) {
      throw new Error('Post s týmto title už existuje');
    }
    const createPost = new this.postModel(createPostDto);
    return createPost.save();
  }

  async findAll() {
    return await this.postModel.find().exec();
  }
}
