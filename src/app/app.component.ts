import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  // title = 'Holi';
  // happyDate: Date = new Date(2021, 7, 16, 0, 0, 0);
  // days: number;
  // hours: number;
  // minutes: number;
  // seconds: number;
  //
  // ngOnInit() {
  //   setInterval(() => {
  //     const now: Date = new Date();
  //     const difference = now.getTime() >= this.happyDate.getTime() ? null : this.happyDate.getTime() - now.getTime();
  //     if (difference){
  //       this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //       this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  //       this.seconds = Math.floor((difference % (1000 * 60)) / (1000));
  //       console.log(`${this.days} días, ${this.hours} horas, ${this.minutes} minutos, ${this.seconds} segundos,`);
  //     //   console.log(`${difference.getDate()} días, ${difference.getHours() + 3} horas, ${difference.getMinutes()} minutos, ${difference.getSeconds()} segundos`);
  //     } else{
  //       this.days = 0;
  //       this.hours = 0;
  //       this.minutes = 0;
  //       this.seconds = 0;
  //       console.log(`${this.days} días, ${this.hours} horas, ${this.minutes} minutos, ${this.seconds} segundos,`);
  //     }
  //   }, 1000);
  // }

}
