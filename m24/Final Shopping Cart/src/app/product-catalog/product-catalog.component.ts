import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {DataserviceService} from '../dataservice.service';
@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  searchData;
  productdetails;
  //notavailableflag=false;
  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private http:HttpClient,
    private servicedata:DataserviceService
  ) { 
    this.route.params.subscribe(data=>{
      console.log(data.searchedData);
      this.searchData=this.route.snapshot.paramMap.get('searchedData');
    this.productdetails = this.servicedata.productdit;
    })
   }


  ngOnInit() {
    //this.searchData=this.route.snapshot.paramMap.get('searchedData');    
    //this.productdetails = this.servicedata.productdit;
    // for(var i=0;i<this.productdetails.length();i++) {
    //   if(this.searchData!=this.productdetails[i].title){
    //     this.notavailableflag=true;
    //   }
    // }
    
  }
}
