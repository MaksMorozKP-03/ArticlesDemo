import { Injectable } from '@angular/core';
import Article from '../models/Article';
import { ARTICLES_URL } from 'src/assets/constants';
import { Observable, map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesUrl =
    'https://api.spaceflightnewsapi.net/v4/articles/?limit=10';
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    let response = this.http.get(this.articlesUrl);
    return response.pipe(
      map((data: any) => {
        let articles: any[] = data['results'];
        return articles.map((article: any) => {
          return new Article(
            article.id,
            article.title,
            article.url,
            article.image_url,
            article.summary,
            article.updated_at
          );
        });
      })
    );
  }
}
