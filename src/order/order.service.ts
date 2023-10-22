import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './create_order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async create(order: CreateOrderDto): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async deleteOrder(id: string) {
    await this.orderModel.findByIdAndRemove(id);
  }

  async updateOrder(id: string, order: Order) {
    await this.orderModel.findByIdAndUpdate(id, order);
  }

  async updateStatusOrder(id: string, status: string) {
    await this.orderModel.findByIdAndUpdate(id, { status });
  }

  async findOrderByPhone(phone: string) {
    return this.orderModel.find({ phone }).exec();
  }
}
