import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'firstDigit'})
export class FirstDigitPipe implements PipeTransform
{
    transform(value: number): string
    {
        return Math.floor(value / 10).toString();
    }
}
