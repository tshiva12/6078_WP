import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import {DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  submitted;
  login;
  constructor(
    private route:ActivatedRoute,
    public router:Router,
    private location: Location,
    private servicedata:DataserviceService
  ) { }

  ngOnInit() {

  }
  onSubmit(){
    this.submitted=true;
  }
  log;
  // loginCheck(){
  //   this.login = {email:this.email, password:this.password};
  //   this.servicedata.checkuser(this.login).subscribe(x=>{this.log=x;
  //     if(this.log.check==1) {
  //       var user={user:this.log.user.username,email:this.log.user.email,phone:this.log.user.phoneNumber}
  //       this.servicedata.currentuser(user);
  //       this.router.navigate(['/'],{relativeTo:this.route});
  //       //return;
  //     }
  //   });
  // }
  
}
