import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { catService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [catService],
})
export class CatsModule {}
