import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-popup-payment',
  templateUrl: './popup-payment.component.html',
  styleUrls: ['./popup-payment.component.css']
})
export class PopupPaymentComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }
change:number;
amount:number;
balance:number;
table:number;
tableid:string;
saletype:string;
salemode:string;
cover:string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['table']) {
        let table = params["table"];
        this.table = table;
        this.salemode = params["salemode"];
        this.saletype = params["saletype"];
        this.cover = params["cover"];
        this.balance=params["balance"];
        this.amount=params["amount"];
        this.change=this.amount-this.balance;
        this.change = this.change < 0 ? 0 : this.change;
      }
    });
  }
  clearNum() {
    this.amount = 0;
  }
  delNum() {
    let num = this.amount.toString().substring(0, this.amount.toString().length - 1);
    num = num == "" ? "0" : num;
    this.amount = Number(num);
  }
  addNum(number) {
    let num = this.amount.toString() + number;
    this.amount = Number(num);
  }
  Change(){
    this.change=this.amount-this.balance;
    this.change = this.change < 0 ? 0 : this.change;
  }
}
