import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-outlet-area',
  templateUrl: './outlet-area.component.html',
  styleUrls: ['./outlet-area.component.css']
})
export class OutletAreaComponent implements OnInit {
username:string;
  constructor(private tranService:TranslateService) { }
  language:string="en";
  ngOnInit() {
    $('.button-collapse').sideNav(
      {
        edge:'left',
        closeOnClick:true,
        draggable:true
      }
    );
    this.username=localStorage.getItem('token');
  }
  changelang(){
     this.language=this.language=="en"?"th":"en";
     this.tranService.use(this.language);
  }
}
