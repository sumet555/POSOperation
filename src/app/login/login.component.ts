import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { LoginService } from '../shared/user/login.service';
import {Login} from '../shared/user/login';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  login:Login; 
  language:string="th";
  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService,
    private tranService:TranslateService
   ) {
      this.login=new Login();
  }
  @ViewChild('loginForm') loginForm: NgForm;
  ngOnInit() {
    $('.button-collapse').sideNav(
      {
        edge:'left',
        closeOnClick:true,
        draggable:true
      }
    );
  }
  doLogin(){
    if($(".invalid").length>0){
      Materialize.toast("Invalid",3000);
   }
    else{
          localStorage.setItem('token', this.login.email);
          this.router.navigate(['', 'outlet']);
    }
  }
  changelang()
  {
     this.language=this.language=="en"?"th":"en";
     this.tranService.use(this.language);
  }

}
