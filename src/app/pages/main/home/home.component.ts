import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = ['../../../../assets/img/home/slider1.jpg',
  '../../../../assets/img/home/slider2.jpg',
  '../../../../assets/img/home/slider3.jpg'
];
  
  constructor() { }

  ngOnInit(): void {
  }

}
