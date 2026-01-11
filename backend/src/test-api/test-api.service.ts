import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/test-create.dto';
import { UpdateDto } from './dto/test-update.dto';

@Injectable()
export class TestApiService {
  private posts: CreateTestDto[] = [];
  private nextId = 1;

  constructor() {
    this.posts = [
      { id: 1, title: 'priv prispevok', content: 'Obsah tohoto prispevku' },
    ];
  }

  findAll(): CreateTestDto[] {
    return this.posts;
  }

  createOne(post: Omit<CreateTestDto, 'id'>): CreateTestDto {
    const newPost = { ...post, id: this.nextId++ };
    this.posts.push(newPost);
    return newPost;
  }

  updateOne(id: number, updatePost: UpdateDto | undefined) {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.posts[index] = {
        ...this.posts[index],
        ...updatePost,
      };
      return this.posts[index];
    }
    return undefined;
  }

  findOne(id: number): CreateTestDto | undefined {
    return this.posts.find((p: CreateTestDto) => p.id === id);
  }

  removeOne(id: number): CreateTestDto[] {
    this.posts = this.posts.filter((p: CreateTestDto) => p.id !== id);
    return this.posts;
  }
}
