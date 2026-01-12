import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateDto {
  @ApiPropertyOptional({
    description: 'Názov postu',
    example: 'Aktualizovaný názov',
  })
  title?: string;
  @ApiPropertyOptional({
    description: 'Obsah postu',
    example: 'Aktualizovaný obsah.',
  })
  content?: string;
}
