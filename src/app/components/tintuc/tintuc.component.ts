import { Component } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent {
  news: any[] = [];
  constructor(private newsService: NewsService ) { }

  ngOnInit(){
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.news;
      console.log(this.news);
    });
  }
}
