import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-danhmucsanpham',
  templateUrl: './danhmucsanpham.component.html',
  styleUrls: ['./danhmucsanpham.component.css']
})
export class DanhmucsanphamComponent implements OnInit{
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      this.filteredProducts = [...this.products];
      console.log(this.products);
      console.log(this.filteredProducts);
    });
  }

  onSearchInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    this.filteredProducts = this.products.filter(product => {
      const productName = product.name.toLowerCase();
      const productPrice = product.price.toString().toLowerCase();
      const searchTerm = inputValue.toLowerCase();
  
      return productName.includes(searchTerm) || productPrice.includes(searchTerm);
    });
  }

}
