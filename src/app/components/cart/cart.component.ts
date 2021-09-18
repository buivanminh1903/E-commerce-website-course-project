/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any = [];
  // @ts-ignore
  cartTotal = 0;
  // @ts-ignore
  public city = ['Hồ Chí Minh',
    'Hà Nội',
    'Đà Nẵng',
    'An Giang',
    'Bà Rịa - Vũng Tàu',
    'Bắc Giang',
    'Bắc Kạn',
    'Bạc Liêu',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Định',
    'Bình Dương',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cần Thơ',
    'Cao Bằng',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Tĩnh',
    'Hải Dương',
    'Hải Phòng',
    'Hậu Giang',
    'Hòa Bình',
    'Hưng Yên',
    'Khánh Hòa'];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res => {
      this.product = res;
      console.log(res);

      // @ts-ignore
      this.product.forEach(item => {
        // @ts-ignore
        this.cartTotal += (item.Quantity * item.Price);
      })
    });
  }

  // tslint:disable-next-line:typedef
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  // tslint:disable-next-line:typedef
  emptyCart() {
    this.cartService.removeAllCart();
    window.alert('Sản phẩm đã được xoá khỏi giỏ hàng!');
  }

  confirmCart() {
    this.cartService.removeAllCart();
    window.alert('Đặt hàng thành công, nhân viên sẽ liên hệ đến bạn trong 25 phút nữa để xác nhận đơn hàng!');
  }
}
