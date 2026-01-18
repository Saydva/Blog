import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsMongoId } from 'class-validator';
import { type ObjectId } from 'mongoose';

export class CreatePostDto {
  @ApiProperty({ description: 'Názov článku', example: 'Môj prvý článok' })
  @IsString()
  @IsNotEmpty()
  title: string;
  @ApiProperty({ description: 'Obsah článku', example: 'Toto je obsah...' })
  @IsString()
  @IsNotEmpty()
  content: string;
  @ApiProperty({ description: 'Slug Clanku', example: 'Moj prvy clanok' })
  @IsString()
  @IsNotEmpty()
  slug: string;
  @ApiProperty({ description: 'Author', example: 'id:3452' })
  @IsMongoId()
  @IsNotEmpty()
  author: ObjectId;
  @ApiProperty({
    description: 'Published',
    example: 'publikovany pre ostatnych pouzivatelov na citanie',
  })
  @IsEnum(['draft', 'published'])
  @IsNotEmpty()
  status: string;
}
