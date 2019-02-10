import { Injectable, ɵConsole } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(
   
    private http:HttpClient
  ) { }
// create;
    cart=[];
    // productdit;
    // user;
    productdit=
  [
		{
			"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
			"description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
			"image": "1.jpeg",
			"quantity":"10",
      "cost":"10490",
      "review":["good"],
      "rating":"4.5"
		},
		{
			"title": "Mi A2 4GB + 64GB",
			"description": "15.2cm (5.99) large display",
			"image": "2.jpeg",
			"quantity":"20",
			"cost":"13689",
      "review":["good"],
      "rating":"4.9"
		},
		{
			"title": "Mi A2 6GB + 128GB",
			"description": "15.2cm (5.99) large display",
			"image": "3.jpeg",
			"quantity":"20",
			"cost":"Rs.15,999",
      "review":["good"],
      "rating":"4.5"
		},
		{
			"title": "Apple iPhone 8 Plus 64GB",
			"description": "13.97cm(5.5)display",
			"image": "4.jpeg",
			"quantity":"30",
			"cost":"68999",
      "review":["good"],
      "rating":"4.8"
		},
		{
			"title": "Redmi note 6 Pro 64GB",
			"description": "15.9 cm (6.26 inches) FHD+ Display with Resolution ",
			"image": "5.jpeg",
			"quantity":"40",
			"cost":"13999",
      "review":["good"],
      "rating":"4.6"
		},
		{
			"title": "Honor 10 Lite 64GB",
			"description": "15.77 cm (6.21 inches) large display",
			"image": "6.jpeg",
			"quantity": "45",
			"cost": "13999",
      "review":["good"],
      "rating":"4.5"
		},
		{
			"title": "Realme U1 32GB",
			"description": "16cm (6.3 inches) large display",
			"image": "7.jpeg",
			"quantity": "35",
			"cost": "10999",
      "review":["good"],
      "rating":"4.0"
		},
		{
			"title": "OnePlus 6T 128GB",
			"description": "16.2cm (6.41 inches) Full HD+ optic AMOLED display",
			"image": "8.jpeg",
			"quantity": "20",
			"cost": "37999",
      "review":["good"],
      "rating":"3.9"
		},
		{
			"title": "Nokia 7.1 (Gloss Midnight Blue, 64GB)",
			"description": "14.83 cm (5.84 inches) Full HD+ Display",
			"image": "9.jpeg",
			"quantity": "40",
			"cost": "18990",
      "review":["good"],
      "rating":"4.2"
		},
		{
			"title": "Google Pixel 3 64GB",
			"description": "13.97 cm(5.5 inch) FHD+ Display",
			"image": "10.jpeg",
			"quantity": "30",
			"cost": "71000",
      "review":["good"],
      "rating":"4.6"
		},
		{
			"title": "Acer Predator Helios i7 8th Gen - (8 GB/1 TB HDD)",
			"description": "39.62cm (15.6 inch) Display",
			"image": "11.jpeg",
			"quantity": "15",
			"cost": "79990",
      "review":["good"],
      "rating":"4.7"
		},
		{
			"title": "Dell Inspiron Core i5 8th Gen - (8 GB/2 TB HDD)",
			"description": "39.62cm (15.6 inch) Display",
			"image": "12.jpeg",
			"quantity": "30",
			"cost": "60490",
      "review":["good"],
      "rating":"4.5"
		},
		{
			"title": "Lenova Ideapad 330S core i5 8th Gen - (8 GB/1TB HDD)",
			"description": "39.62cm (15.6 inch) Display",
			"image": "13.jpeg",
			"quantity": "40",
			"cost": "55990",
      "review":["good"],
      "rating":"3.8"
		},
		{
			"title": "Asus",
			"description": "39.62cm (15.6 inch) Display",
			"image": "14.jpeg",
			"quantity": "50",
			"cost": "25000",
      "review":["good"],
      "rating":"3.5"
		},
		{
			"title": "HP",
			"description": "39.62cm (15.6 inch) Display",
			"image": "15.jpeg",
			"quantity": "12",
			"cost": "35000",
      "review":["good"],
      "rating":"4.0"
		},
		{
			"title": "Sony R302F",
			"description": "80cm (32 inch) HD Ready LED TV",
			"image": "16.jpeg",
			"quantity": "15",
			"cost": "20999",
      "review":["good"],
      "rating":"4.1"
		},
		{
			"title": "LG Smart",
			"description": "80cm (32 inch) HD Ready LED Smart TV",
			"image": "17.jpeg",
			"quantity": "30",
			"cost": "20499",
      "review":["good"],
      "rating":"4.4"
		},
		{
			"title": "Mi TV",
			"description": "LED Smart TV 4A Pro 123.2 cm (49) with Android",
			"image": "18.jpeg",
			"quantity": "40",
			"cost": "30999",
      "review":["good"],
      "rating":"4.3"
		},
		{
			"title": "Samsung TV",
			"description": "80cm (32 inch) HD Ready LED TV 2018 Edition",
			"image": "19.jpeg",
			"quantity": "30",
			"cost": "14999",
      "review":["good"],
      "rating":"5"
		},
		{
			"title": "Vu TV",
			"description": "102cm (40 inch) Full HD LED TV",
			"image": "20.jpeg",
			"quantity": "25",
			"cost": "15999",
      "review":["good"],
      "rating":"4.5"
		}
	]
    getData(){
        return this.productdit;
    }
    
    getprodData(i){
      return this.productdit[i];
    }

    addCart(prod){
      if(this.cart.indexOf(prod)!=-1){
        this.cart[this.cart.indexOf(prod)].quantity++;
      } else {
      this.cart.push(prod);}
    }

    cartDetails() {
      return this.cart;
    }

    addReview(reviews,i){
      //console.log("comment  "+reviews);
      this.productdit[i].review.push(reviews);

      // var temp;
      // this.http.get('http://127.0.0.1:3000/getproduct/').subscribe(t=>{ temp=t; temp[i].review.push(reviews); console.log("this s"+temp[i])});
      // console.log("temp is"+temp);
      // console.log(temp[i]);

    }

    // newUser(obj){
    //   console.log("hello");
    //   return this.http.post("http://127.0.0.1:3000/register", obj).subscribe(x=>{this.create=x; console.log(this.create)});
    // }

    // checkuser(login) {
    //   // alert("hello");
    //   return this.http.post("http://127.0.0.1:3000/login", login);
    // }

    // currentuser(user){
    //   this.user=user;
    // }

    // getUserDetails(){
    //   return this.user;
    // }
}
