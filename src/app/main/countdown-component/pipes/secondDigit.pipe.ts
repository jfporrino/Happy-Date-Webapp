import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'secondDigit'})
export class SecondDigitPipe implements PipeTransform
{
    transform(value: number): string
    {
        return (value % 10).toString();
    }
}
