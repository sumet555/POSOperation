import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Table} from '../shared/table/table';
import {Zone} from '../shared/zone/zone';
@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrls: ['./table-area.component.css']
})
export class TableAreaComponent implements OnInit {
table:Table;
  constructor(private tranService:TranslateService
    ,private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.table=new Table();
    }
  language:string="en";
  username:string;
  zone:string;
  outlet:string;
  ngOnInit() {
    $('.button-collapse').sideNav(
      {
        edge:'left',
        closeOnClick:true,
        draggable:true
      }
    );
    this.username=localStorage.getItem('token');
    this.outlet=localStorage.getItem('outlet');
    this.zone=localStorage.getItem('zone');
    //this.zone=this.table.zone;
  }
  changelang(){
    this.language=this.language=="en"?"th":"en";
    this.tranService.use(this.language);
 }
}
