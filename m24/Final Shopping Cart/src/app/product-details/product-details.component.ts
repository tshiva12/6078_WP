import { Component, OnInit } from '@angular/core';
import {DataserviceService} from '../dataservice.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   prod;
   rev : string;
   id;
   added=false;
  constructor(
     private servicedata:DataserviceService,
     private route:ActivatedRoute,
     private location: Location
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.prod=this.servicedata.getprodData(this.id);
  }
  add(prod){
    this.servicedata.addCart(prod);
    this.added=true;
  }
  reviews(){
    //console.log(this.prod.review);
    if(this.rev === undefined) {
      alert("Please enter your reviews!!");
    }else{
    this.servicedata.addReview(this.rev,this.id);
    alert("Thank you for giving your reviews");
    }
  }
}
