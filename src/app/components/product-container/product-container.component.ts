import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/product.service';


@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit{

  product: any;
  products: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    
    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
    });

    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    const cartItems = this.cartService.getItems();
  }

}
