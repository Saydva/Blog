import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/createPostDto';

@Controller('post')
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
      if (error) {
        throw new BadRequestException(error);
      }
      throw error;
    }
  }
}
