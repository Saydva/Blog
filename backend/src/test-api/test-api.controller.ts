import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testApiService.findOne(Number(id));
  }

  @Post()
  createOne(@Body() dto: Omit<CreateTestDto, 'id'>) {
    return this.testApiService.createOne(dto);
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() dto: UpdateDto) {
    const result = this.testApiService.updateOne(Number(id), dto);
    if (!result) {
      throw new NotFoundException('Nenašiel som post');
    }
    return result;
  }

  @Delete(':id')
  removeOne(@Param('id') id: string) {
    const result = this.testApiService.removeOne(Number(id));
    if (!result) {
      throw new NotFoundException('Post nexexistuje');
    }
    return result;
  }
}
