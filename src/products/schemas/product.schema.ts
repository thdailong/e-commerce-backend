import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  category: string;

  @Prop({})
  images: string[];

  @Prop({})
  brand: string;

  @Prop({ required: true })
  countInStock: number;

  @Prop({})
  rating: number;

  @Prop({})
  numReviews: number;

  @Prop({})
  hide: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
