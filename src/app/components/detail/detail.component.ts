import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product, ProductModelServer } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { map } from 'rxjs/operators';
import { CommentsModelServer, ServerResponse } from '../../models/comments.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare let $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  public productList: any;
  public comments: CommentsModelServer[] = [];

  constructor(private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private commentsService: CommentsService) { }

  errormsg: any;
  successmsg: any;

  // @ts-ignore
  Id: number;
  // @ts-ignore
  product;

  // tslint:disable-next-line:typedef
  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Sản phẩm đã được thêm vào giỏ hàng!');
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.Id;
        })
      )
      .subscribe(prodId => {
        this.Id = prodId;
        console.log(this.Id);
        this.userForm.patchValue({ products_id: this.Id })
        // @ts-ignore
        this.commentsService.getCommentsByProduct(this.Id).subscribe((prods: ServerResponse) => {
          this.comments = prods.comments;
          console.log(prods);
        });

        this.productService.getSingleProduct(this.Id).subscribe(prod => {
          this.product = prod;
          this.productList = prod;

          this.productList.forEach((a: any) => {
            Object.assign(a, { Quantity: 1, Price: a.Price });
          });
        });
      });
  }

  userForm = new FormGroup({
    'displayname': new FormControl('', Validators.required),
    'gender': new FormControl('', Validators.required),
    'noidung': new FormControl('', Validators.required),
    'recommend': new FormControl(''),
    'products_id': new FormControl('', Validators.required),
    'sodienthoai': new FormControl('', Validators.required)
  });

  userSubmit() {
    let recommend = this.userForm.value.recommend;
    let gender = this.userForm.value.gender;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.commentsService.newComment(this.userForm.value).subscribe((res) => {
        this.userForm.reset();
        this.successmsg = 'Succesfully';
      })
    } else {
      this.errormsg = 'Vui lòng nhập đầy đủ thông tin';
    }
  }

  userFormDel = new FormGroup({
    'sodienthoai': new FormControl('', Validators.required),
    'requestRemoveComment': new FormControl('', Validators.required)
  });

  userSubmitDel() {
    if (this.userFormDel.valid) {
      console.log(this.userFormDel.value);
      this.commentsService.removeCommentRequest(this.userFormDel.value).subscribe((res) => {
        this.userFormDel.reset();
        this.successmsg = 'Succesfully';
      })
    } else {
      this.errormsg = 'Vui lòng nhập đầy đủ thông tin';
    }
  }

  ngAfterViewInit(): void {
  }
}
