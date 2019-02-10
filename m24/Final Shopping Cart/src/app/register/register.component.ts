import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name;
  email;
  phoneno;
  password;
  repeatPassword;
  submitted=false;
  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private servicedata:DataserviceService
  ) { }
  
  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
  }
//   checkValid() {
//     if(this.password != this.repeatPassword){
//       alert("enter a valid password");
//     } else{
//       alert("you successfully got Registered!!")
//     }
//     var obj={username:this.name,
//       email:this.email,
//       phoneNumber:this.phoneno,
//       password:this.password
// };
// var data = this.servicedata.newUser(obj);
// console.log(this.name);
// console.log(this.email);
// console.log(obj);
//   }

 
}
