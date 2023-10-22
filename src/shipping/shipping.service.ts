import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { ShippingDto } from './shipping.dto';

@Injectable()
export class ShippingService {
  constructor(private readonly httpService: HttpService) {}

  async getProvince() {
    const response = await this.httpService
      .get(
        'https://online-gateway.ghn.vn/shiip/public-api/master-data/province',
      )
      .pipe(map((res) => res.data));
    const data = await lastValueFrom(response);
    return data?.data;
  }

  async getDistrict(provinceCode: string) {
    const response = await this.httpService
      .get(
        `https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceCode}`,
      )
      .pipe(map((res) => res.data));
    const data = await lastValueFrom(response);
    return data?.data;
  }

  async getWard(districtCode: string) {
    const response = await this.httpService
      .get('https://online-gateway.ghn.vn/shiip/public-api/master-data/ward', {
        params: { district_id: districtCode },
      })
      .pipe(map((res) => res.data));
    const data = await lastValueFrom(response);
    return data?.data;
  }

  async getServiceOrder(fromDistrict: string, toDistrict: string) {
    const response = this.httpService
      .get(
        'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services',
        {
          params: {
            from_district: fromDistrict,
            to_district: toDistrict,
            shop_id: 4648262,
          },
        },
      )
      .pipe(map((res) => res.data));
    const data = await lastValueFrom(response);
    return data?.data;
  }

  async getShippingFee(shippingInfo: ShippingDto) {
    const response = this.httpService
      .get(
        'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee',
        {
          params: {
            shop_id: 4648262,
            ...shippingInfo,
          },
        },
      )
      .pipe(map((res) => res.data));
    const data = await lastValueFrom(response);
    return data?.data;
  }
}
