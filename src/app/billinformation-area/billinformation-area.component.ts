import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router'
import{Http} from '@angular/http'
@Component({
  selector: 'app-billinformation-area',
  templateUrl: './billinformation-area.component.html',
  styleUrls: ['./billinformation-area.component.css']
})

export class BillinformationAreaComponent implements OnInit {
  innerHeight: any;
  innerWidth: any;
  constructor(private tranService:TranslateService
    ,private router: Router
  , private http: Http) {
    this.innerHeight = (window.screen.height);
    this.innerWidth = (window.screen.width);
    if(this.innerWidth>768)
    {
        this.billDetail();
        console.log(this.innerWidth);
    }
   }
  language:string="en";
  salemode:number;
  saletype:string;
  table:number;
  cover:number;
  ngOnInit() {
    
  }
  changelang(){
    this.language=this.language=="en"?"th":"en";
    this.tranService.use(this.language);
 }
 takeOrder(){
  let table=JSON.parse(localStorage.getItem('tableData'));
  this.salemode=table[0].salemode;
  this.saletype=table[0].saletype;
  this.cover=table[0].cover;
  this.table=table[0].table;
  this.router.navigate(['', 'popup-product', this.table,this.saletype,this.table,this.cover]);
 }
 billDetail(){
  let table=JSON.parse(localStorage.getItem('tableData'));
  this.salemode=table[0].salemode;
  this.saletype=table[0].saletype;
  this.cover=table[0].cover;
  this.table=table[0].table;
  this.router.navigate(['', 'billinformation',this.salemode,this.saletype,this.table,this.cover]);
 }
 onResize(event){
  event.target.innerWidth; 
  if(event.target.innerWidth>768)
  {
      this.billDetail();
  }
}
}
