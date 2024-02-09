import { Injectable } from '@nestjs/common';
import { MetalDTO } from './metalDto';

@Injectable()
export class MetalService {

    create(metalDto: MetalDTO): MetalDTO {
        return metalDto;

    }

    list(metalDto: MetalDTO): MetalDTO[] {
        return [metalDto];
    }
}
