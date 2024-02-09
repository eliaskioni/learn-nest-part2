import { Body, Controller, Get, Post } from '@nestjs/common';
import { MetalDTO } from './metalDto';
import { MetalService } from './metal.service';

@Controller('metal')
export class MetalController {

    constructor(private readonly metalService: MetalService) {}

    @Post()
    create(@Body() metalDto: MetalDTO ): MetalDTO {
        console.log(metalDto);
        this.metalService.list(metalDto);
        return this.metalService.create(metalDto);
    };

    @Get()
    list(): MetalDTO[] {
        const metalList: MetalDTO[] = [
            { type: 'ore', metal: 'Copper' },
            { type: 'ore', metal: 'Iron' }
        ];
        return metalList; 
    }
}
