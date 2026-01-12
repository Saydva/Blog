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
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('test-api')
@Controller('test-api')
export class TestApiController {
  constructor(private readonly testApiService: TestApiService) {}
  @Get()
  @ApiResponse({
    status: 200,
    description: 'Zoznam vsetkych postov',
    type: [CreateTestDto],
  })
  findAll() {
    return this.testApiService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'ID postu', example: '345' })
  @ApiResponse({
    status: 200,
    description: 'Post s id 345',
    type: CreateTestDto,
  })
  @ApiResponse({ status: 404, description: 'Post nenájdený' })
  findOne(@Param('id') id: string) {
    return this.testApiService.findOne(Number(id));
  }

  @Post()
  @ApiBody({ type: CreateTestDto })
  @ApiResponse({
    status: 201,
    description: 'Post vytvorený',
    type: CreateTestDto,
  })
  createOne(@Body() dto: Omit<CreateTestDto, 'id'>) {
    return this.testApiService.createOne(dto);
  }

  @Put(':id')
  @ApiParam({
    name: 'id',
    description: 'ID postu na aktualizáciu',
    example: '1',
  })
  @ApiBody({ type: UpdateDto })
  @ApiResponse({
    status: 200,
    description: 'Post aktualizovaný',
    type: CreateTestDto,
  })
  @ApiResponse({ status: 404, description: 'Post nenájdený' })
  updateOne(@Param('id') id: string, @Body() dto: UpdateDto) {
    const result = this.testApiService.updateOne(Number(id), dto);
    if (!result) {
      throw new NotFoundException('Nenašiel som post');
    }
    return result;
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'ID postu na odstránenie',
    example: '1',
  })
  @ApiResponse({
    status: 200,
    description: 'Post odstránený',
    type: CreateTestDto,
  })
  @ApiResponse({ status: 404, description: 'Post nenájdený' })
  removeOne(@Param('id') id: string) {
    const result = this.testApiService.removeOne(Number(id));
    if (!result) {
      throw new NotFoundException('Post nexexistuje');
    }
    return result;
  }
}
