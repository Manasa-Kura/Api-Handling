import { Component, OnInit } from '@angular/core';
import {  Api} from '../api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-api-practice',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './api-practice.html',
  styleUrls: ['./api-practice.css']
})
export class ApiPracticeComponent implements OnInit {

  users: any[] = [];    //stores api response in array

  constructor(private api: Api) {} //injects service to call api

  ngOnInit() {          //runs automatically when component is initialized
    this.api.getUsers().subscribe((res:any) => {  //calls servive method->service method calls api->response comes back->subscribe receives data
      console.log(res);
      this.users = res;
    });
  }
  newProduct = {
  title: '',
  price: ''
  };

  addProduct() {    //runs when button clicked (function trigger)
    this.api.addProduct(this.newProduct).subscribe((res) => { //send user data to service
      console.log("POST RESPONSE:", res);
    });
  }
  updateData = {
  title: '',
  price: ''
  };

  updateProduct() {
    this.api.updateProduct(1, this.updateData).subscribe((res: any) => {
      console.log("PUT RESPONSE:", res);
    });
  }
  deleteProduct(){
    this.api.deleteProduct(5).subscribe((res:any)=>{
      console.log("DELETE RESPONSE:",res);
    });
  }
}