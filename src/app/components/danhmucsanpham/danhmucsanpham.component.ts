import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-danhmucsanpham',
  templateUrl: './danhmucsanpham.component.html',
  styleUrls: ['./danhmucsanpham.component.css']
})
export class DanhmucsanphamComponent {
  products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }

}
