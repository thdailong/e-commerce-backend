import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { catService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [catService],
})
export class CatsModule {}
