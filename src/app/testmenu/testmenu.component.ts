import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testmenu',
  templateUrl: './testmenu.component.html',
  styleUrls: ['./testmenu.component.css']
})
export class TestmenuComponent implements OnInit {

  constructor(private tranService: TranslateService, private router: Router) { }
  menuListData = [{ "id": "01", "menuname": "A", "mom": "0" },
  { "id": "0101", "menuname": "AA", "mom": "01" },
  { "id": "010101", "menuname": "AAA", "mom": "0101"},
  { "id": "02", "menuname": "B", "mom": "0"},
  { "id": "0201", "menuname": "BB", "mom": "02" },
  { "id": "020101", "menuname": "BBB", "mom": "0201"},
  { "id": "010102", "menuname": "AAAA", "mom": "0101"},
  { "id": "03", "menuname": "C", "mom": "0"},
  { "id": "0301", "menuname": "CC", "mom": "03" },
  { "id": "030101", "menuname": "CCC", "mom": "0301"},
]
  ngOnInit() {
    
    $('.button-collapse').sideNav(
      {
        edge:'left',
        closeOnClick:true,
        draggable:true
      }
    );
  }

}
