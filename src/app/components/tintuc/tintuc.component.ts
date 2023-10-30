import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit{
  news: any[] = [];
  filteredProducts: any[] = [];
  constructor(private newsService: NewsService ) { }

  ngOnInit(){
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.news;
      this.filteredProducts = [...this.news];
      console.log(this.news);
      console.log(this.filteredProducts);
    });
  }
  onSearchInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
  
    this.filteredProducts = this.news.filter(product => {
      const productName = product.name.toLowerCase();
      const searchTerm = inputValue.toLowerCase();
  
      return productName.includes(searchTerm) ;
    });
  }

}
