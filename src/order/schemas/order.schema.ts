import { Prop, Schema } from '@nestjs/mongoose';

export type detailsOfOrder = {
  productId: string;
  quantity: number;
  price: number;
};

@Schema()
export class Order {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  dateCreated: Date;

  @Prop({ required: true })
  details: detailsOfOrder[];

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  paymentMethod: string;
}
