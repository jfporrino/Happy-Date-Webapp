import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit{
  happyDate: Date = new Date(2021, 7, 16, 0, 0, 0);
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  loading = true;

  ngOnInit() {
    setInterval(() => {
      const now: Date = new Date();
      const difference = now.getTime() >= this.happyDate.getTime() ? null : this.happyDate.getTime() - now.getTime();
      if (difference){
        this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((difference % (1000 * 60)) / (1000));
      } else{
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
      if (this.loading) {
        this.loading = false;
      }
    }, 1000);
  }

}
