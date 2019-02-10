import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  firstname;
  email;
  address;
  city;
  state;
  zip;
  cardname;
  cardnumber;
  expmonth;
  expyear;
  cvv;
  submitted=false;
  constructor() { }

  ngOnInit() {

  }
  checkout(){
    this.submitted=true;
  }
}
