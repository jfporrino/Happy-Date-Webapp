import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {tadaAnimation, zoomOutUpOnLeaveAnimation} from 'angular-animations';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  animations: [
      tadaAnimation(),
      zoomOutUpOnLeaveAnimation({duration: 1000, delay: 50})
  ]
})
export class CountdownComponent implements OnInit, OnDestroy{
  // happyDate: Date = new Date(2021, 7, 16, 0, 0, 0);
  // happyDate: Date = new Date(2021, 7, 2, 21, 47, 0);
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  intervalId;

  loading = true;
  isNowDate = false;
  showCountdown = true;

  constructor(
      private router: Router,
  ) {
  }

  ngOnDestroy() {
    if (this.intervalId){
      clearInterval(this.intervalId);
    }
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const now: Date = new Date();
      const difference = now.getTime() >= environment.happyDate.getTime() ? null : environment.happyDate.getTime() - now.getTime();

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

        if (!this.isNowDate){
          setTimeout(() => {
            this.isNowDate = true;
          }, 200);
        }
      }
      if (this.loading) {
        this.loading = false;
      }
    }, 1000);
  }

  zoomOut(){
    if (this.isNowDate){
      this.showCountdown = false;
    }
  }

  navigate(){
    if (!this.showCountdown){
      this.router.navigate(['/main']);
    }
  }
}
