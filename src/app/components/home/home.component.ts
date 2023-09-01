import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import Article from '../../models/Article';
import { Observable, combineLatestWith, map } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private articleService: ArticleService) {}
  searchedText = new FormControl('');
  allArticles$: Observable<Article[]> = this.articleService.getArticles();
  shownArticles$: Observable<Article[]> = this.allArticles$;

  ngOnInit() {
    this.allArticles$ = this.articleService.getArticles();
    this.shownArticles$ = this.allArticles$;
  }

  search() {
    let query = this.searchedText.value?.replaceAll(' ', ',');
    if (query) {
      this.shownArticles$ = this.articleService
        .searchArticlesByTitle(query)
        .pipe(
          combineLatestWith(this.articleService.searchArticlesBySummary(query)),
          map(([articlesWithTitles, articlesWithSummaries]) => {
            let arr = articlesWithSummaries.filter((item) => {
              return !articlesWithTitles.find(
                (article) => article.id === item.id
              );
            });
            return articlesWithTitles.concat(arr);
          })
        );
    } else {
      this.shownArticles$ = this.allArticles$;
    }
  }
}
