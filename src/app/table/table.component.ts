import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {TableAreaComponent} from '../table-area/table-area.component';
import {Table} from '../shared/table/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TableAreaComponent]
})
export class TableComponent implements OnInit {
image='./assets/image/Table.png';
table:Table;
outletName:string;
tableData=[1,2,3,4,5,6,7,8,9,10,11,12,13];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { 
      this.table=new Table();
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
       if (params['zone']) {
         let zone = params["zone"];
        this.table.zone=zone;
       }
     });
  }
  tableClick(tableid)
  {
    this.router.navigate(['', 'popup_table',tableid]);
  }
}
