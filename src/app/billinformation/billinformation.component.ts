import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
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
  groupData = [{ "gname": "Food", "image": "/assets/image/food.jpg" }
    , { "gname": "Bev", "image": "/assets/image/bev.jpg" }
    , { "gname": "Misc", "image": "/assets/image/BG-blue.jpg" }
    , { "gname": "Wine", "image": "/assets/image/wine.jpg" }];

  subgroupData = [{ "gname": "Food", "subname": "Salad", "image": "/assets/image/salad.jpg" }
    , { "gname": "Food", "subname": "Soup", "image": "/assets/image/soup.jpg" },
  { "gname": "Food", "subname": "Noodles", "image": "/assets/image/noodles.jpg" }
    , { "gname": "Misc", "subname": "Misc", "image": "/assets/image/BG-blue.jpg" }
    , { "gname": "Bev", "subname": "Vodka", "image": "/assets/image/vodka.jpg" }
    , { "gname": "Wine", "subname": "Wine", "image": "/assets/image/wine.jpg" }
  ];

  itemData = [{ "subname": "Salad", "itemname": "Chef Salad", "image": "/assets/image/salad.jpg" },
  { "subname": "Soup", "itemname": "Soup", "image": "/assets/image/soup.jpg" },
  { "subname": "Vodka", "itemname": "Vodka", "image": "/assets/image/vodka.jpg" },
  { "subname": "Wine", "itemname": "Wine", "image": "/assets/image/wine.jpg" },
  { "subname": "Misc", "itemname": "Misc", "image": "/assets/image/BG-blue.jpg" }
  ];
  fnItemData=[
    { "name": "Condiment", "image": "/assets/image/BGred.jpg" }
    ,{ "name": "Item Discount", "image": "/assets/image/BGbrown.jpg" }
    ,{ "name": "Cooking Note", "image": "/assets/image/BGviolet.jpg" }
    ,{ "name": "Delete Item", "image": "/assets/image/BGgrey.jpg" }
    ,{ "name": "Change Qty", "image": "/assets/image/BGgreen.jpg" }
  ];
  fnBillData=[
    { "name": "NewBill", "image": "/assets/image/BG-blue.jpg" }
    ,{ "name": "Payment", "image": "/assets/image/BGorange.jpg" }
    ,{ "name": "Split Bill", "image": "/assets/image/BGbrown.jpg" }
    ,{ "name": "VoidBill", "image": "/assets/image/BGviolet.jpg" }
    ,{ "name": "TransferBill", "image": "/assets/image/BGred.jpg" }
    ,{ "name": "AverageBill", "image": "/assets/image/BGgreen.jpg" }
    ,{ "name": "SplitBill", "image": "/assets/image/BGviolet.jpg" }
    ,{ "name": "Combine", "image": "/assets/image/BGred.jpg" }
    ,{ "name": "Print", "image": "/assets/image/BGviolet.jpg" }
    ,{ "name": "Re-Print", "image": "/assets/image/BGbrown.jpg" }
    ,{ "name": "Cover", "image": "/assets/image/BGred.jpg" }
    ,{ "name": "Discount", "image": "/assets/image/BGgreen.jpg" }
    ,{ "name": "Close Chk", "image": "/assets/image/BGbrown.jpg" }
  ];
  subGroup = [];
  item = [];
  pGroup: boolean = true;
  pSubGroup: boolean = false;
  pItem: boolean = false;
  pfnItem:boolean=false;
  pfnBill:boolean=false;
  qty: number = 1;
  guestchk = "000001";
  OrderDate = new Date();
  tableid: string;
  salemode: string;
  saletype: string;
  cover: number;
  total: number = 0;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['table']) {
        let table = params["table"];
        let salemodeid = params["salemode"];
        this.tableid = table + "/01";
        this.saletype = params["saletype"];
        this.cover = params["cover"];
        this.SetSaleMode(salemodeid);
      }
    });
  }
  SetSaleMode(id) {
    if (id == 1) {
      this.salemode = "Guest Order";
    }
    else if (2) {
      this.salemode = "Officer";
    }
    else {
      this.salemode = "Entertain";
    }
  }
  GroupClick(gname) {
    this.subGroup = this.subgroupData.filter(
      item => item.gname === gname);
    this.pSubGroup = true;
    this.pGroup = false;
    this.pItem = false;
    this.pfnItem=false;
    this.pfnBill=false;
  }
  SubGroupClick(subname) {
    this.item = this.itemData.filter(
      item => item.subname === subname);
    this.pSubGroup = false;
    this.pGroup = false;
    this.pItem = true;
    this.pfnItem=false;
    this.pfnBill=false;
  }
  gMenu() {
    this.pSubGroup = false;
    this.pGroup = true;
    this.pItem = false;
    this.pfnItem=false;
    this.pfnBill=false;
  }
  fnBillClick() {
    this.pSubGroup = false;
    this.pGroup = false;
    this.pItem = false;
    this.pfnItem=false;
    this.pfnBill=true;
  }
  itemClick(itemname) {

  }
  clearNum() {
    this.qty = 0;
  }
  delNum() {
    let num = this.qty.toString().substring(0, this.qty.toString().length - 1);
    num = num == "" ? "0" : num;
    this.qty = Number(num);
  }
  addNum(number) {
    let num = this.qty.toString() + number;
    this.qty = Number(num);
  }
}
