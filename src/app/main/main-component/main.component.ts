import {Component, OnInit} from '@angular/core';
import * as Vara from 'vara';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.signature();
  }

  signature() {
    let vara = new Vara('#signature', '../assets/fonts/parisienne.json', [
      {
        text: 'Lau y Juan',
        duration: 3000,
        textAlign: 'center'
      },
    ], {
      fontSize: 72,
      color: '#FAFAFA',
    });
  }

}
