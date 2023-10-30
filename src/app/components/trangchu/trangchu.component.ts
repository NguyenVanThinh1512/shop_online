import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  products: any[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    ) { }

  ngOnInit(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    const cartItems = this.cartService.getItems();
  }
}
