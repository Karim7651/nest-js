import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}
    compute(a: number, b: number): number {
        console.log(`Computing the sum of ${a} and ${b}.`);
        this.powerService.supplyPower(50);
        return a+b;
    }
}
