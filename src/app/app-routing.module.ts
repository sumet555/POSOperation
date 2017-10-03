import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {OutletAreaComponent} from './outlet-area/outlet-area.component';
import {OutletComponent} from './outlet/outlet.component';
import {ZoneAreaComponent} from './zone-area/zone-area.component';
import {ZoneComponent} from './zone/zone.component';
import {TableAreaComponent} from './table-area/table-area.component'
import  {TableComponent} from './table/table.component'
import {PopupTableComponent} from './popup-table/popup-table.component'
import {BillinformationComponent} from './billinformation/billinformation.component'
import {BillinformationAreaComponent} from './billinformation-area/billinformation-area.component'
import {SplitbillComponent} from './splitbill/splitbill.component'
import {PopupProductComponent} from './popup-product/popup-product.component'
import {PopupPaymentComponent} from './popup-payment/popup-payment.component'
import { TestmenuComponent } from './testmenu/testmenu.component';
const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
    children: [
      {
        path:'login',component:LoginComponent
      }
    ]
  },
  {
    path: '',
    component:OutletAreaComponent,
    children: [
      {
        path:'outlet',component:OutletComponent
      }
    ]
  },
  {
    path: '',
    component:ZoneAreaComponent,
    children: [
      {
        path:'zone/:id',component:ZoneComponent
      }
    ]
  },
  {
    path: '',
    component:TableAreaComponent,
    children: [
      {
        path:'table/:zone',component:TableComponent
      },
      {
        path:'popup_table/:table',component:PopupTableComponent
      }
    ]
  },
  {
    path: '',
    component:BillinformationAreaComponent,
    children: [
      {
        path:'billinformation/:salemode/:saletype/:table/:cover',component:BillinformationComponent
      }
    ]
  },
  {
    path: '',
    component:SplitbillComponent,
    children: [
      {
         path:'splitbill/:salemode/:saletype/:table/:cover',component:SplitbillComponent
        //path:'splitbill',component:SplitbillComponent
      }
    ]
  },
  {
    path: '',
    component:BillinformationAreaComponent,
    children: [
      {
        // path:'splitbill/:salemode/:saletype/:table/:cover',component:SplitbillComponent
        path:'popup-product/:salemode/:saletype/:table/:cover',component:PopupProductComponent
      }
    ]
  },
  {
    path: '',
    component:BillinformationAreaComponent,
    children: [
      {
        // path:'splitbill/:salemode/:saletype/:table/:cover',component:SplitbillComponent
        path:'popup-payment/:salemode/:saletype/:table/:cover/:balance/:amount',component:PopupPaymentComponent
      }
    ]
  },
  {
    path: '',
    component:TestmenuComponent,
    children: [
      {
        path:'testmenu',component:TestmenuComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
