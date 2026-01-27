import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  ConflictException,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPostDto';
import { MongoError } from 'mongodb';

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
      if (!post) {
        throw new NotFoundException('Post not created');
      }
      return post;
    } catch (error) {
      if (error instanceof MongoError && error.code === 11000) {
        // MongoDB duplicate key error
        throw new ConflictException('Post s týmto title už existuje');
      }

      throw new BadRequestException(
        (error instanceof MongoError && error.message) ||
          'Chyba pri vytváraní postu',
      );
    }
  }

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }
}
