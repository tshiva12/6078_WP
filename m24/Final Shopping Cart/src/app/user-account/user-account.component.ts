import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor(private servicedata:DataserviceService) {
    
   }
  username;
  phone;
  email;
  data;
  ngOnInit() {
    // this.data=this.servicedata.getUserDetails();

    // this.username=this.data.user;
    // this.email=this.data.email;
    // this.phone=this.data.phone;
  }


}
