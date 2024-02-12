import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurSalesNetworkComponent } from './our-sales-network/our-sales-network.component';
import { OurTechnicalSupportComponent } from './our-technical-support/our-technical-support.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'ourSalesNetwork',
    component: OurSalesNetworkComponent
  },
  {
    path: 'ourTechnicalSupport',
    component: OurTechnicalSupportComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class mainRoutingModule { }
