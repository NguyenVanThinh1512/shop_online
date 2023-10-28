import { Component } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-conten-tintuc',
  templateUrl: './conten-tintuc.component.html',
  styleUrls: ['./conten-tintuc.component.css']
})
export class ContenTintucComponent {
  news: any[] = [];
  constructor(private newsService: NewsService ) { }

  ngOnInit(){
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.news;
      console.log(this.news);
    });
  }
}
