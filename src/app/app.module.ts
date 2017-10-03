import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginGuardService} from './shared/user/login-guard.service';
import { OutletAreaComponent } from './outlet-area/outlet-area.component';
import { ZoneAreaComponent } from './zone-area/zone-area.component';
import { TableAreaComponent } from './table-area/table-area.component';
import { BillinformationAreaComponent } from './billinformation-area/billinformation-area.component';

import {HttpModule} from '@angular/http';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OutletComponent } from './outlet/outlet.component';
import { ZoneComponent } from './zone/zone.component';
import { TableComponent } from './table/table.component';
import { BillinformationComponent } from './billinformation/billinformation.component';
import { PopupTableComponent } from './popup-table/popup-table.component';
import { SplitbillComponent } from './splitbill/splitbill.component';
import { PopupProductComponent } from './popup-product/popup-product.component';
import { PopupPaymentComponent } from './popup-payment/popup-payment.component';
import { TestmenuComponent } from './testmenu/testmenu.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OutletAreaComponent,
    ZoneAreaComponent,
    TableAreaComponent,
    BillinformationAreaComponent,
    OutletComponent,
    ZoneComponent,
    TableComponent,
    BillinformationComponent,
    PopupTableComponent,
    SplitbillComponent,
    PopupProductComponent,
    PopupPaymentComponent,
    TestmenuComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  })
  ],
  providers: [LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
