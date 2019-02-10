import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
// import { Location } from '@angular/common';
import {DataserviceService} from '../dataservice.service';
import { ProductCatalogComponent } from '../product-catalog/product-catalog.component';
@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  cart:any[]=[];
  constructor(
    private servicedata:DataserviceService
    // private route:ActivatedRoute,
    // private location: Location
    ) { }
  ngOnInit() {
    this.cart=this.servicedata.cartDetails();
  }
  remove(i) {
    this.cart.splice(i, 1);
  }
}
