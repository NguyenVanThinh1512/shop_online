import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanhtoangiaohang',
  templateUrl: './thanhtoangiaohang.component.html',
  styleUrls: ['./thanhtoangiaohang.component.css']
})
export class ThanhtoangiaohangComponent {
  cartItems: any[]; 

  constructor(private cartService: CartService,private router: Router) {
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

  isToastActive: boolean = false;
  isProgressActive: boolean = false;
  private timer1: any;
  private timer2: any;
  showSuccessMessage() {
    this.isToastActive = true;
    this.isProgressActive = true;

    this.timer1 = setTimeout(() => {
      this.isToastActive = false;
    }, 3000);

    this.timer2 = setTimeout(() => {
      this.isProgressActive = false;
      this.router.navigate(['/']);
    }, 3300);
  }

  closeToast() {
    this.isToastActive = false;
    setTimeout(() => {
      this.isProgressActive = false;
    }, 300);
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }
}