import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { catService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: catService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() cat: CreateCatDto) {
    await this.catsService.create(cat);
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log('params', params);
    return `This action returns a #${params.id} cat`;
  }
}
