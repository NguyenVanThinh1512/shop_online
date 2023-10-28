import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  private newUrl = '/assets/data/datanews.json';

  getNews():Observable<any[]> { 
    return this.http.get<any[]>(this.newUrl);``
  }

  // chi tiết sản phẩm
  getNewsById(newsId: number): Observable<any> {
    
    return this.getNews().pipe(
      map((data: any) => {
        const filteredNews = data.news.filter((item: any) => item.id == newsId);
        console.log(filteredNews, "Filtered News");
        return filteredNews;
      })
    );
      
  }
}
