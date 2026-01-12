import { ApiProperty } from '@nestjs/swagger';

export class CreateTestDto {
  @ApiProperty({ description: 'Id postu', example: 231 })
  id: number;
  @ApiProperty({ description: 'Nazov postu', example: 'Moj post' })
  title: string;
  @ApiProperty({
    description: 'Obsah postu ',
    example: 'v tomto poste sa nachadza context',
  })
  content: string;
}
