import { Component, OnInit, Pipe } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-billinformation',
  templateUrl: './billinformation.component.html',
  styleUrls: ['./billinformation.component.css']
})
@Pipe({
  name: 'myfilter'
})
export class BillinformationComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }
groupData=[{"gname":"Food"},{"gname":"Bev"},{"gname":"Misc"},{"gname":"Wine"}];

subgroupData=[{"gname":"Food","subname":"Salad"},{"gname":"Food","subname":"Soup"},
{"gname":"Food","subname":"Noodles"},{"gname":"Misc","subname":"Misc"}
,{"gname":"Bev","subname":"Vodka"},{"gname":"Beverage","subname":"Vodka"}
,{"gname":"Wine","subname":"Wine"}
];

itemData=[{"subname":"Salad","itemname":"Chef Salad"},
{"subname":"Soup","itemname":"Tomato Soup"},
{"subname":"Vodka","itemname":"Vodka"},
{"subname":"Wine","itemname":"Red Wine"},
{"subname":"Misc","itemname":"Misc"}
];
subGroup=[];
item=[];
pGroup:boolean=true;
pSubGroup:boolean=false;
pItem:boolean=false;
qty:number;
guestchk="000001";
OrderDate= new Date();
tableid:string;
salemode:string;
saletype:string;
cover:number;
total:number=1000;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['table']) {
        let table = params["table"];
        let salemodeid=params["salemode"];
        this.tableid=table+"/01";
        this.saletype=params["saletype"];
        this.cover=params["cover"];
        this.SetSaleMode(salemodeid);
      }
    });
  }
  SetSaleMode(id){
    if(id==1){
      this.salemode="Guest Order";
    }
    else if(2){
      this.salemode="Officer";
    }
    else {
      this.salemode="Entertain";
    }
  }
  GroupClick(gname) {
    this.subGroup = this.subgroupData.filter(
      item => item.gname === gname);
      this.pSubGroup=true;
      this.pGroup=false;
      this.pItem=false;
  }
  SubGroupClick(subname){
    this.item = this.itemData.filter(
      item => item.subname === subname);
      this.pSubGroup=false;
      this.pGroup=false;
      this.pItem=true;
  }
gMenu(){
  this.pSubGroup=false;
  this.pGroup=true;
  this.pItem=false;
}
  itemClick(itemname){

  }
  clearNum(){
    this.qty=0;
  }
  delNum(){
    let num=this.qty.toString().substring(0,this.qty.toString().length-1);
    num=num==""?"0":num;
    this.qty=Number(num);
  }
  addNum(number){
    let num=this.qty.toString()+number;
    this.qty=Number(num);
  }
}
