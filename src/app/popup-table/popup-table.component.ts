import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-popup-table',
  templateUrl: './popup-table.component.html',
  styleUrls: ['./popup-table.component.css']
})
export class PopupTableComponent implements OnInit {

  constructor(private router: Router,
  private activatedRoute:ActivatedRoute) { }
saletype:string="Normal";
allguestnum:number=0;
table:string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['table']) {
        let table = params["table"];
        this.table=table;
      }
    });
  }
Close(){
  let zone=localStorage.getItem('zone');
  this.router.navigate(['', 'table',zone]);
}
ChangeSaleMode(){
  this.saletype=this.saletype=="Normal"?"Home":"Normal";
}
numdes(){
  this.allguestnum=this.allguestnum==0?0:this.allguestnum-1;
}
numins(){
  this.allguestnum=this.allguestnum+1;
}
clearNum(){
  this.allguestnum=0;
}
delNum(){
  let num=this.allguestnum.toString().substring(0,this.allguestnum.toString().length-1);
  num=num==""?"0":num;
  this.allguestnum=Number(num);
}
addNum(number){
  let num=this.allguestnum.toString()+number;
  this.allguestnum=Number(num);
}
openBill(typebill){
  let salemode;
    if(typebill==1){
      salemode=1;
    }
    else if(typebill==2){
      salemode=2;
    }
    else{
      salemode=3;
    }
    this.router.navigate(['', 'billinformation',salemode,this.saletype,this.table,this.allguestnum]);
}
}
