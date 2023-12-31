import { Injectable } from '@angular/core';
import Article from '../models/Article';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articlesCount = 50;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    let response = this.http.get(
      `https://api.spaceflightnewsapi.net/v4/articles/?limit=${this.articlesCount}`
    );
    return this.createArticlesArray(response);
  }

  searchArticlesByTitle(query: string): Observable<Article[]> {
    let response = this.http.get(
      `https://api.spaceflightnewsapi.net/v4/articles/?title_contains_one=${query}`
    );
    return this.createArticlesArray(response);
  }

  searchArticlesBySummary(query: string): Observable<Article[]> {
    let response = this.http.get(
      `https://api.spaceflightnewsapi.net/v4/articles/?summary_contains_one=${query}`
    );
    return this.createArticlesArray(response);
  }

  getArticleById(id: Number): Observable<Article> {
    let response = this.http.get(
      `https://api.spaceflightnewsapi.net/v4/articles/${id}`
    );
    return response.pipe(
      map((data: any) => {
        return new Article(data);
      })
    );
  }

  private createArticlesArray(
    response: Observable<Object>
  ): Observable<Article[]> {
    return response.pipe(
      map((data: any) => {
        let articles: any[] = data['results'];
        return articles.map((article: any) => {
          return new Article(article);
        });
      })
    );
  }
}
