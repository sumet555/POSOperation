import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-popup-product',
  templateUrl: './popup-product.component.html',
  styleUrls: ['./popup-product.component.css']
})
export class PopupProductComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {

     }
     groupData = [{ "gname": "Food", "image": "./assets/image/food.jpg" }
     , { "gname": "Bev", "image": "./assets/image/bev.jpg" }
     , { "gname": "Bakery", "image": "./assets/image/bakery.jpg" }
     , { "gname": "Wine", "image": "./assets/image/wine.jpg" }
   ];
 
   subgroupData = [{ "gname": "Food", "subname": "Salad", "image": "./assets/image/salad.jpg" }
     , { "gname": "Food", "subname": "Soup", "image": "./assets/image/soup.jpg" },
   { "gname": "Food", "subname": "Noodles", "image": "./assets/image/noodles.jpg" }
     , { "gname": "Bakery", "subname": "Cake", "image": "./assets/image/cake.jpg" }
     , { "gname": "Bakery", "subname": "Bread", "image": "./assets/image/bread.jpg" }
     , { "gname": "Bev", "subname": "Vodka", "image": "./assets/image/vodka.jpg" }
     , { "gname": "Wine", "subname": "Wine", "image": "./assets/image/wine.jpg" }
   ];
 
   itemData = [{ "subname": "Salad", "itemname": "Chef Salad", "image": "./assets/image/salad.jpg", "price": 100 },
   { "subname": "Soup", "itemname": "Soup", "image": "./assets/image/soup.jpg", "price": 120 },
   { "subname": "Vodka", "itemname": "Vodka", "image": "./assets/image/vodka.jpg", "price": 200 },
   { "subname": "Wine", "itemname": "Wine", "image": "./assets/image/wine.jpg", "price": 150 },
   { "subname": "Bread", "itemname": "Bread", "image": "./assets/image/bread.jpg", "price": 50 },
   { "subname": "Cake", "itemname": "Cake", "image": "./assets/image/cake.jpg", "price": 100 }
   ];
fnItemData = [
  { "name": "Condiment", "image": "./assets/image/BGred.jpg" }
  , { "name": "Discount", "image": "./assets/image/BGbrown.jpg" }
  , { "name": "CookingNote", "image": "./assets/image/BGviolet.jpg" }
  , { "name": "DeleteItem", "image": "./assets/image/BGgrey.jpg" }
  , { "name": "Change Qty", "image": "./assets/image/BGgreen.jpg" }
];
table:number;
tableid:string;
saletype:string;
cover:string;
subGroup = [];
item = [];
pGroup: boolean = true;
pSubGroup: boolean = false;
pItem: boolean = false;
qty: number = 1;
salemode: string;
pMenu: boolean = true;
billData = [];
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['table']) {
        let table = params["table"];
        this.table = table;
        this.salemode = params["salemode"];
        this.saletype = params["saletype"];
        this.cover = params["cover"];
      }
    });
  }
  GroupClick(gname) {
    if (this.subgroupData == null) {return null;}
      this.subGroup = this.subgroupData.filter(
        item => item.gname === gname);
      this.pSubGroup = true;
      this.pGroup = false;
      this.pItem = false;
    
  }
  SubGroupClick(subname) {
    if (this.itemData == null) {return null;}
      this.item = this.itemData.filter(
        item => item.subname === subname);
      this.pSubGroup = false;
      this.pGroup = false;
      this.pItem = true;
    
  }

  gMenu() {
    this.pSubGroup = false;
    this.pGroup = true;
    this.pItem = false;
  }
  itemClick(itemname) {
    if (this.itemData == null) {return null;}
      let itemSelect = this.itemData.filter(
        item => item.itemname === itemname);
      let item = JSON.parse(localStorage.getItem("billData"));

      if (item == null) {
        let itemAdd: any[] = [{ "itemName": itemname, "each": itemSelect[0].price , "Price": itemSelect[0].price * this.qty, "qty": this.qty, "seat": 1, "table": this.table }]
        item = itemAdd;
      }
      else {
        let itemAdd = {
          "itemName": itemname
          , "each": itemSelect[0].price 
          , "Price": itemSelect[0].price * this.qty
          , "qty": this.qty
          , "seat": 1
          , "table": this.table
        }
        item.push(itemAdd);
      }
      this.billData = item;
      localStorage.setItem("billData", JSON.stringify(this.billData));
      this.router.navigate(['', 'billinformation',this.salemode,this.saletype,this.table,this.cover]);
  }
 
}
