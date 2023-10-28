import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-chitiettintuc',
  templateUrl: './chitiettintuc.component.html',
  styleUrls: ['./chitiettintuc.component.css']
})
export class ChitiettintucComponent implements OnInit{
  new: any;
  news: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
  ) {}

  ngOnInit(): void {
    const newsId = this.route.snapshot.params['id'];
    console.log(newsId);
    
    this.newsService.getNewsById(newsId).subscribe(data => {
      this.new = data;
    });
    
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.news;
      console.log(this.news);
    });
  }

}
