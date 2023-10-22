import { ApiProperty } from '@nestjs/swagger';

export class ShippingDto {
  @ApiProperty()
  service_id: string;
  @ApiProperty()
  to_ward_code: string;
  @ApiProperty()
  to_district_id: string;
  @ApiProperty()
  from_district_id: string;
  @ApiProperty()
  from_ward_code: string;
  @ApiProperty()
  weight: number;
  @ApiProperty()
  length: number;
  @ApiProperty()
  width: number;
  @ApiProperty()
  height: number;
}
