import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'plus'
})

export class PlusPipe implements PipeTransform {
    transform(num: number, secodNum:number = 1): number {
        return num + secodNum;
    }
}