import {Component, HostListener, OnInit} from '@angular/core';
import * as Vara from 'vara';
import {fadeInOnEnterAnimation} from 'angular-animations';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
      fadeInOnEnterAnimation({duration: 10000})
  ]
})
export class MainComponent implements OnInit{
  innerWidth;
  innerHeight;
  varaIsDone = false;

  tinyStars = [];
  mediumStars = [];
  bigStars = [];

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.initStars();

    this.signature();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.initStars();
  }

  signature() {
    const vara = new Vara('#signature', '../assets/fonts/parisienne.json', [
      {
        text: 'Lau y Juan',
        duration: 3000,
        textAlign: 'center'
      },
    ], {
      fontSize: this.innerWidth < 600 ? 48 : 72,
      color: '#FAFAFA',
    });
    vara.animationEnd(() => {
      this.varaIsDone = true;
    });
  }

  initStars(): void{
    this.tinyStars = [];
    this.mediumStars = [];
    this.bigStars = [];

    let tinyStarsAmount = 700;
    let mediumStarsAmount = 200;
    let bigStarsAmount = 100;

    if (this.innerWidth < 600) {
      tinyStarsAmount = 233;
      mediumStarsAmount = 66;
      bigStarsAmount = 33;
    }

    for (let i = 0; i < tinyStarsAmount; i++) {
      this.tinyStars.push({
        top: this.randomHeight(),
        right: this.randomWidth(),
      });
    }

    for (let i = 0; i < mediumStarsAmount; i++) {
      this.mediumStars.push({
        top: this.randomHeight(),
        right: this.randomWidth(),
      });
    }

    for (let i = 0; i < bigStarsAmount; i++) {
      this.bigStars.push({
        top: this.randomHeight(),
        right: this.randomWidth(),
      });
    }
  }

  randomHeight(): string{
    return `${Math.floor(Math.random() * (this.innerHeight - 5))}px`;
  }

  randomWidth(): string{
    return `${Math.floor(Math.random() * (this.innerWidth - 5))}px`;
  }

}
