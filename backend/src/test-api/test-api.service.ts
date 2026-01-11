import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/test-create.dto';
import { UpdateDto } from './dto/test-update.dto';
import { mockPosts } from './mock-data';

@Injectable()
export class TestApiService {
  private posts: CreateTestDto[] = [];
  private nextId = Math.max(...mockPosts.map((p) => p.id)) + 1;

  constructor() {
    this.posts = [...mockPosts];
  }

  findAll(): CreateTestDto[] {
    return this.posts;
  }

  findOne(id: number): CreateTestDto | undefined {
    return this.posts.find((p: CreateTestDto) => p.id === id);
  }

  createOne(post: Omit<CreateTestDto, 'id'>): CreateTestDto {
    const newPost = { ...post, id: this.nextId++ };
    this.posts.push(newPost);
    return newPost;
  }

  updateOne(
    id: number,
    updatePost: UpdateDto | undefined,
  ): CreateTestDto | undefined {
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

  removeOne(id: number): CreateTestDto | undefined {
    const findPost = this.posts.find((p) => p.id === id);
    this.posts = this.posts.filter((p: CreateTestDto) => p.id !== id);
    return findPost;
  }
}
