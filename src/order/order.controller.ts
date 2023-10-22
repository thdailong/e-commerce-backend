import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './create_order.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @UseGuards(AuthGuard)
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

  @Get(':phone')
  @ApiTags('order')
  async getOrderByPhone(@Param('phone') phone: string) {
    return this.orderService.findOrderByPhone(phone);
  }

  @UseGuards(AuthGuard)
  @Post(':id/status')
  @ApiTags('order')
  async updateStatusOrder(@Param('id') id: string, @Body() status: string) {
    return this.orderService.updateStatusOrder(id, status);
  }
}
