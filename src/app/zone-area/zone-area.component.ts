import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-zone-area',
  templateUrl: './zone-area.component.html',
  styleUrls: ['./zone-area.component.css']
})
export class ZoneAreaComponent implements OnInit {
  constructor(private tranService:TranslateService,
    private activatedRoute: ActivatedRoute) {
   }
  language:string="en";
  username:string;
  outletName:string;
  url:string;
  zone:string;
  ngOnInit() {
    $('.button-collapse').sideNav(
      {
        edge:'left',
        closeOnClick:true,
        draggable:true
      }
    );
    this.activatedRoute.params.subscribe(params => {
      if (params['zone']) {
        this.zone = params["zone"];
         this.outletName=params["outlet"];
      }
    });
    this.username=localStorage.getItem('token');
  }
  changelang(){
    this.language=this.language=="en"?"th":"en";
    this.tranService.use(this.language);
 }
}
