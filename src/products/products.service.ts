import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }
  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getOneProduct(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async deleteProduct(id: string) {
    await this.productModel.findByIdAndRemove(id);
  }

  async updateProduct(id: string, product: CreateProductDto) {
    await this.productModel.findByIdAndUpdate(id, product);
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.productModel.find({ category }).exec();
  }

  async getProductByOil(): Promise<Product[]> {
    return this.productModel.find({ isOil: true }).exec();
  }

  async searchProducts(query: string): Promise<Product[]> {
    return this.productModel
      .find({ name: { $regex: query, $options: 'i' } })
      .exec();
  }
}
