import { Controller, Get } from '@nestjs/common';
import { TestApiService } from './test-api.service';

@Controller('test-api')
export class TestApiController {
  constructor(private readonly testApiService: TestApiService) {}
  @Get()
  getData() {
    return this.testApiService.getData();
  }
}
