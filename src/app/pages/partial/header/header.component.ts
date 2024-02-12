import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectionism(){
    console.log("Click");
    this.router.navigate(['pages/home']);
  }

  redirec(){
    console.log("Click");
    this.router.navigate(['pages/products']);
  }

  redirect(){
    console.log("Click");
    this.router.navigate(['pages/ourSalesNetwork']);
  }

  redirection(){
    console.log("Click");
    this.router.navigate(['pages/ourTechnicalSupport']);
  }

}
