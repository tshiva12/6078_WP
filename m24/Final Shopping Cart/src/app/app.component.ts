import { Component } from '@angular/core';
import {DataserviceService} from './dataservice.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'ShoppingCart';
  productdetails;
  searchedData; 
  reg:string="Register";
  log:string="Login";
  constructor(
    private servicedata:DataserviceService,
    private http:HttpClient
    ) { }
    ngOnInit() {
      this.http.get('http://127.0.0.1:3000/getproduct/'+this.searchedData, 
    {responseType: 'text'}).subscribe((data) => {this.productdetails=JSON.parse(data).products;
      this.servicedata.productdit = this.productdetails;},(err)=>{console.log(err)});
    }
  search(){  
    console.log(this.searchedData);
    this.http.get('http://127.0.0.1:3000/getproduct/'+this.searchedData, 
    {responseType: 'text'}).subscribe((data) => {this.productdetails=JSON.parse(data).products;
      this.servicedata.productdit = this.productdetails;},(err)=>{console.log(err)});
    // this.servicedata.productdit = this.productdetails;
    this.searchedData="";
  }  
  
}
