import { Controller, Get } from '@nestjs/common';
import { TestApiService } from './test-api.service';
import { CreateTestDto } from './dto/test-create.dto';
import { UpdateDto } from './dto/test-update.dto';

@Controller('test-api')
export class TestApiController {
  constructor(private readonly testApiService: TestApiService) {}
  @Get()
  findAll() {
    return this.testApiService.findAll();
  }
}
