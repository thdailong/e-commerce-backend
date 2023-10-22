import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type detailsOfOrder = {
  productId: string;
  quantity: number;
  price: number;
};

export type address = {
  province: string;
  district: string;
  ward: string;
  address: string;
};

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dateCreated: Date;

  @Prop({
    type: [{ productId: String, quantity: Number, price: Number }],
    required: true,
  })
  details: detailsOfOrder[];

  @Prop({ required: true })
  shippingFee: number;

  @Prop()
  totalFee: number;

  @Prop({ required: true })
  status: string;

  @Prop({ type: Object, required: true })
  address: address;

  @Prop({ required: true })
  phone: string;

  @Prop({})
  email: string;

  @Prop({})
  paymentMethod: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
