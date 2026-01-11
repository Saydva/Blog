import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/test-create.dto';

@Injectable()
export class TestRepository {
  private posts = [];
  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((p: CreateTestDto) => p.id === id);
  }

  removeOne(id: number) {
    return (this.posts = this.posts.filter((p: CreateTestDto) => p.id != id));
  }
}
