import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ProductModelServer, ServerResponse } from '../../models/product.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  products: ProductModelServer[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    // tslint:disable-next-line:ban-types
    this.productService.getAllProducts().subscribe((prods: ServerResponse) => {
      this.products = prods.products;
    });
  }

  // tslint:disable-next-line:typedef ban-types
  selectProduct(Id: Number) {
    this.router.navigate(['/detail', Id]).then();
  }

  // tslint:disable-next-line:typedef
  selectCategory(category: string) {
    this.router.navigate(['/category', category]).then();
  }
}
