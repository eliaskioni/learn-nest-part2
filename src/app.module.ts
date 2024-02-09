import { Module } from '@nestjs/common';
import { MetalController } from './metal/metal.controller';
import { MetalService } from './metal/metal.service';

@Module({
  imports: [],
  controllers: [MetalController],
  providers: [MetalService],
})
export class AppModule {}
