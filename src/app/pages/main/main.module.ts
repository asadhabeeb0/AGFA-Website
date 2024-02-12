import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PartialModule } from '../partial/partial.module';
import { mainRoutingModule } from './main-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurSalesNetworkComponent } from './our-sales-network/our-sales-network.component';
import { OurTechnicalSupportComponent } from './our-technical-support/our-technical-support.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    HomeComponent,
    OurSalesNetworkComponent,
    OurTechnicalSupportComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    PartialModule,
    mainRoutingModule,
    NgbModule
  ]
})
export class MainModule { }
