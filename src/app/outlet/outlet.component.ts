import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {
  outletData = [{"outletName":"Outlet1","image":"./assets/image/restaurant1.jpg"},{"outletName":"Outlet2","image":"./assets/image/restaurant2.jpg"}
  , {"outletName":"Outlet3","image":"./assets/image/restaurant3.jpg"}
  , {"outletName":"Outlet4","image":"./assets/image/restaurant4.jpg"}
  , {"outletName":"Outlet5","image":"./assets/image/restaurant5.jpg"}
  , {"outletName":"Outlet6","image":"./assets/image/restaurant6.jpg"}
  , {"outletName":"Outlet7","image":"./assets/image/restaurant7.jpg"}];
  constructor(private router: Router) { }

  ngOnInit() {

  }
  outletClick(outlet){
    localStorage.setItem('outlet', outlet);
    this.router.navigate(['', 'zone',outlet]);
  }
}
