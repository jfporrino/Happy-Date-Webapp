import { NgModule } from '@angular/core';
import { CountdownComponent } from './countdown.component';
import {RouterModule, Routes} from '@angular/router';
import {FirstDigitPipe} from './pipes/firstDigit.pipe';
import {SecondDigitPipe} from './pipes/secondDigit.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path     : '',
    component: CountdownComponent,
  }
];

@NgModule({
  declarations: [
    CountdownComponent,
    FirstDigitPipe,
    SecondDigitPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
  ],
  providers: [],
})
export class CountdownModule { }
