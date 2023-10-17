import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }
  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getOneProduct(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }
}
