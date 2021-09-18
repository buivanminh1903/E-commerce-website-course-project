import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators';
import {ProductModelServer, ServerResponse} from '../../models/product.model';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // @ts-ignore
  products: ProductModelServer[] = [];
  // @ts-ignore
  Category: string;
  // @ts-ignore
  MaLoai: string;
  // @ts-ignore
  TongSp: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    // tslint:disable-next-line:ban-types
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.Category;
        })
      )
      .subscribe((catName: string) => {
        this.Category = catName;
        // @ts-ignore
        this.productService.getProductsFromCategory(this.Category).subscribe((prods: ServerResponse) => {
          this.products = prods.products;
          console.log(prods);
          this.TongSp = this.products.length;
        });
      });
    // @ts-ignore
    // tslint:disable-next-line:triple-equals
    if (this.Category == 'hatgionghoa') {
      this.MaLoai = 'Hạt giống hoa';
    }
    // tslint:disable-next-line:triple-equals
    if (this.Category == 'hatgiongtraicay') {
      this.MaLoai = 'Hạt giống trái cây';
    }
    // tslint:disable-next-line:triple-equals
    if (this.Category == 'hatgiongthaomoc') {
      this.MaLoai = 'Hạt giống thảo mộc';
    }
    // tslint:disable-next-line:triple-equals
    if (this.Category == 'hatgiongthucvat') {
      this.MaLoai = 'Hạt giống thực vật';
    }
  }
}
