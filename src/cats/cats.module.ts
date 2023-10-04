import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
  providers: [],
})
export class CatsModule {}
