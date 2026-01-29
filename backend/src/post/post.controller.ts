import {
  Body,
  Controller,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  ConflictException,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPostDto';

interface DataBaseError extends Error {
  code?: string | number;
}

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      whitelist: true, // odstráni všetky polia, ktoré nie sú v DTO
      forbidNonWhitelisted: true, // ak request obsahuje nepovolené polia, vráti 400
      transform: true, // automaticky konvertuje typy podľa DTO (napr. string na number)
    }),
  )
  async create(@Body() createPostDto: CreatePostDto) {
    try {
      const post = await this.postService.create(createPostDto);
      return post;
    } catch (error) {
      if ((error as DataBaseError).code === 11000) {
        throw new ConflictException('Post s týmto title už existuje');
      }
    }
  }

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(id);
  }

  @Get('title/:title')
  async findOneByTitle(@Param('title') title: string) {
    const post = await this.postService.findByTitle(title);
    if (!post) {
      throw new NotFoundException('Post s týmto title nebol nájdený');
    }
    return post;
  }
}
