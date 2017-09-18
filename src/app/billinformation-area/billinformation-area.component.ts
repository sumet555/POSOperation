import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-billinformation-area',
  templateUrl: './billinformation-area.component.html',
  styleUrls: ['./billinformation-area.component.css']
})
export class BillinformationAreaComponent implements OnInit {

  constructor(private tranService:TranslateService) { }
  language:string="en";
  ngOnInit() {
  }
  changelang(){
    this.language=this.language=="en"?"th":"en";
    this.tranService.use(this.language);
 }
}
