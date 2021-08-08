import {Component, HostListener, OnInit} from '@angular/core';
import * as Vara from 'vara';
import {bounceInUpOnEnterAnimation, fadeInOnEnterAnimation, zoomInOnEnterAnimation} from 'angular-animations';
import {images} from 'src/app/helpers/constants/images.constants';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
      fadeInOnEnterAnimation({duration: 10000}),
      bounceInUpOnEnterAnimation(),
      zoomInOnEnterAnimation()
  ]
})
export class MainComponent implements OnInit{
  innerWidth;
  innerHeight;
  varaIsDone = false;
  initIsDone = false;

  images = [];
  randomImages = [];

  tinyStars = [];
  mediumStars = [];
  bigStars = [];

  constructor() { }

  ngOnInit(): void {
    this.images = images;
    this.randomImages = this.getRandom(this.images, 20).map((i) => {
      return {path: i};
    });

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
      setTimeout(() => {
        this.initIsDone = true;
      }, 5000);
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

  getRandom(arr, n) {
    const result = new Array(n);
    let len = arr.length;
    const taken = new Array(len);
    if (n > len) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    while (n--) {
      const x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }
}
