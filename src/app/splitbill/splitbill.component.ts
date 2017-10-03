import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-splitbill',
  templateUrl: './splitbill.component.html',
  styleUrls: ['./splitbill.component.css']
})
export class SplitbillComponent implements OnInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }
  total: number = 0;
  tableid: string;
  table: string="1";
  billData = [];
  guestchk1 = "000001";
  guestchk2 = "000002";
  salemode: string="Normal";
  OrderDate = new Date();
  saletype:string;
  cover:number;
  salemodeid:number;
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
    let item = JSON.parse(localStorage.getItem("billData"));
    if (item == null) { return null; }
    let billdata = item.filter(
      item => item.table === this.table);
    if (billdata != null) {
      this.billData = billdata;
      this.calTotal();
    }
  }
  calTotal() {
    let total = 0;
    for (var i = 0; i < this.billData.length; i++) {
      if (this.billData[i].Price) {
        total += this.billData[i].Price;
      }
    }
    this.total = total;
  }
  close(){
    this.router.navigate(['', 'billinformation',1,"Normal",1,1]);
  }
}
