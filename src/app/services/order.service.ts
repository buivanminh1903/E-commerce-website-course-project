import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private products: ProductResponseModel[] = [];
  private serverUrl = environment.SERVER_URL;

  constructor(private http: HttpClient) { }
}

interface ProductResponseModel {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  QuantityOrdered: number;
  Images: string;
}
