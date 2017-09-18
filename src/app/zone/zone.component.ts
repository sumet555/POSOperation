import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Zone} from '../shared/zone/zone';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  zone:Zone;
  zoneData = [{"zoneName":"zone1","image":"./assets/image/zone1.jpg"}
  ,{"zoneName":"zone2","image":"./assets/image/zone2.jpg"}
  , {"zoneName":"zone3","image":"./assets/image/zone3.jpg"}
  , {"zoneName":"zone4","image":"./assets/image/zone4.jpg"}
  , {"zoneName":"zone5","image":"./assets/image/zone5.jpg"}
  , {"zoneName":"zone6","image":"./assets/image/zone6.jpg"}
  , {"zoneName":"zone7","image":"./assets/image/zone7.jpg"}];
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.zone=new Zone();
     }
outletName:string;
url:string;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
       if (params['id']) {
         let id = params["id"];
         this.outletName=id;
          this.zone.outletName=this.outletName;
       }
       
     });

  }
  zoneClick(zone){
    localStorage.setItem('zone', zone);
    this.router.navigate(['', 'table',zone]);
    
  }
}
