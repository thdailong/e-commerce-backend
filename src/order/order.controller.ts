import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './create_order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  @ApiTags('order')
  async getAllOrders() {
    return this.orderService.findAll();
  }

  @Post()
  @ApiTags('order')
  async createOrder(@Body() order: CreateOrderDto) {
    return this.orderService.create(order);
  }
}
