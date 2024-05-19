import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'percentage'
})

export class PercentagePipe implements PipeTransform{

    transform(value: any, ...args: any[]) {
        return ((value / args[0]) * 100).toFixed(args[1]) + '%';
    }
}