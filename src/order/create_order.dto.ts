import { ApiProperty } from '@nestjs/swagger';
import { address, detailsOfOrder } from './schemas/order.schema';

export class CreateOrderDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  dateCreated: Date;
  @ApiProperty({ type: Array<detailsOfOrder> })
  details: detailsOfOrder[];
  @ApiProperty()
  shippingFee: number;
  @ApiProperty()
  status: string;
  @ApiProperty({ type: Object })
  address: address;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  paymentMethod: string;
}
