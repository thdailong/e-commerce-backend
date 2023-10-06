import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class catService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(cat: CreateCatDto): Promise<Cat> {
    const newCat = new this.catModel(cat);
    return newCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id).exec();
  }
}
