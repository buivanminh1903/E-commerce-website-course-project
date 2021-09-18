export interface ProductModelServer {
  products: ProductModelServer[];
  Id: number;
  Name: string;
  Category: string;
  Description: string;
  Price: number;
  Quantity: number;
  Image: string;
  Unit: string;
  Info: string;
  catName: string;
  detail1: string;
  detail2: string;
  detail3: string;
  id: number;
  displayname: string;
  ngaytao: string;
  noidung: string;
  recommend: string;
}

export interface ServerResponse {
  count: number;
  products: ProductModelServer[];
}

export class Product {
  Id = 0;
  Name = '';
  Category = '';
  Description = '';
  Price = 0;
  Quantity = 0;
  Image = '';
  Unit = '';
  Info = '';
  catName = '';
}
