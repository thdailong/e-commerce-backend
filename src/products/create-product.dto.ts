import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  countInStock: number;
}
