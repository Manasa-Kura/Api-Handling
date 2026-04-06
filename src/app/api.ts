import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({         //Injectable->used service everywhere
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}    //injects httpclient and used to call api
  getUsers() {
    return this.http.get<any[]>('https://fakestoreapi.com/products');
  }   //getUsers method used to fetch data from the api and return an observable of type any array
  addProduct(data: any) {     //product data we send
    return this.http.post('https://fakestoreapi.com/products', data);
    //sends data to the server and returns an observable of the response
  }
  updateProduct(id: number, data: any) {
    return this.http.put(`https://fakestoreapi.com/products/${id}`, data);
  }
  deleteProduct(id:number){
    return this.http.delete(`https://fakestoreapi.com/products/${id}`)
  }
}
