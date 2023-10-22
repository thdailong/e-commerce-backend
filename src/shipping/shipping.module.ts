import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          token: process.env.GIAO_HANG_NHANH_TOKEN,
        },
      }),
    }),
  ],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
