import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum MetalTypes {
    ORE
}
export class MetalDTO {

    @IsString()
    @IsNotEmpty()
    @IsEnum(MetalTypes)
    type: string;

    @IsNotEmpty()
    @IsString()
    metal: string;
}
