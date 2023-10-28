import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent {
  cartItems: any[]; 

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getItems();
    console.log(this.cartItems);
    
  }
  getTotal() {
    let total = 0;

    for (const item of this.cartItems) {
      if (item.price) {
        total += item.price;
      }
    }

  return total;
  }
}
