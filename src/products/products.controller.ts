import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './create-product.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiTags('product')
  async getAllProducts(): Promise<Product[]> {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  @ApiTags('product')
  @ApiParam({ name: 'id', required: true, description: 'Id to delete' })
  async getOneProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.getOneProduct(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiTags('product')
  async create(@Body() product: CreateProductDto): Promise<CreateProductDto> {
    try {
      await this.productsService.create(product);
      return product;
    } catch (error) {
      throw new BadRequestException(error?.message, {
        cause: new Error(),
        description: 'Some error',
      });
    }
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiTags('product')
  @ApiParam({ name: 'id', required: true, description: 'Id to delete' })
  async delete(@Param('id') id: string) {
    try {
      await this.productsService.deleteProduct(id);
    } catch (error) {
      throw new BadRequestException(error?.message, {
        cause: new Error(),
        description: 'Some error',
      });
    }
  }

  @UseGuards(AuthGuard)
  @Post(':id')
  @ApiTags('product')
  @ApiParam({ name: 'id', required: true, description: 'Id to update' })
  async update(@Param('id') id: string, @Body() product: CreateProductDto) {
    try {
      await this.productsService.updateProduct(id, product);
    } catch (error) {
      throw new BadRequestException(error?.message, {
        cause: new Error(),
        description: 'Some error',
      });
    }
  }

  @Get('category/:category')
  @ApiTags('product')
  async getProductsByCategory(
    @Param('category') category: string,
  ): Promise<Product[]> {
    return this.productsService.getProductsByCategory(category);
  }

  @Get('search/:query')
  @ApiTags('product')
  async searchProducts(@Param('query') query: string): Promise<Product[]> {
    return this.productsService.searchProducts(query);
  }
}
