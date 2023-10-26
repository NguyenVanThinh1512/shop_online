import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.params['id'];
    console.log(productId);
    
    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
    });
    
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

}
