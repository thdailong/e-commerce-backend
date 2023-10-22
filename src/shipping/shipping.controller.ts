import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ShippingService } from './shipping.service';
import { ShippingDto } from './shipping.dto';

@Controller('shipping')
export class ShippingController {
  constructor(private shippingService: ShippingService) {}

  @Get('province')
  @ApiTags('shipping')
  async getProvince() {
    const provinces = await this.shippingService.getProvince();
    return provinces;
  }

  @Get('district/:provinceCode')
  @ApiTags('shipping')
  @ApiParam({
    name: 'provinceCode',
    required: true,
    description: 'Id of province',
  })
  async getDistrict(@Param('provinceCode') provinceCode: string) {
    const districts = await this.shippingService.getDistrict(provinceCode);
    return districts;
  }

  @Get('Ward/:districtCode')
  @ApiTags('shipping')
  @ApiParam({
    name: 'districtCode',
    required: true,
    description: 'Id of district',
  })
  async getWard(@Param('districtCode') districtCode: string) {
    const wards = await this.shippingService.getWard(districtCode);
    return wards;
  }

  @Get('serviceOrder')
  @ApiTags('shipping')
  @ApiQuery({
    name: 'fromDistrict',
    required: true,
    description: 'Id of from district',
  })
  @ApiQuery({
    name: 'toDistrict',
    required: true,
    description: 'Id of to district',
  })
  async getServiceOrder(
    @Query('fromDistrict') fromDistrict: string,
    @Query('toDistrict') toDistrict: string,
  ) {
    const serviceOrder = await this.shippingService.getServiceOrder(
      fromDistrict,
      toDistrict,
    );
    return serviceOrder;
  }

  @Post('shippingFee')
  @ApiTags('shipping')
  async getShippingFee(@Body() shippingInfo: ShippingDto) {
    try {
      const shippingFee =
        await this.shippingService.getShippingFee(shippingInfo);
      return shippingFee;
    } catch (error) {
      console.log('error', error);
      throw new BadRequestException(error?.message, {
        cause: new Error(),
        description: 'Some error',
      });
    }
  }
}
