import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }
}
