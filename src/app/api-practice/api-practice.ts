import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-practice',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './api-practice.html',
  styleUrls: ['./api-practice.css']
})
export class ApiPracticeComponent implements OnInit {

  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<any[]>('https://fakestoreapi.com/products')
      .subscribe((res) => {
        console.log("API DATA:", res); 
        this.users = res;               
      });
  }
}