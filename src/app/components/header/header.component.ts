import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @ts-ignore
  public totalItem: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.cartService.getProduct()
      .subscribe(res => {
        this.totalItem = res.length;
      });
  }

}
