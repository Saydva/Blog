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
    const createPost = new this.postModel(createPostDto);
    return createPost.save();
  }
}
