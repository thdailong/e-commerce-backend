import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  async getOneProduct(id: string): Promise<Product> {
    return this.productsService.getOneProduct(id);
  }

  @Post()
  async create(@Body() product: Product) {
    await this.productsService.create(product);
  }
}
