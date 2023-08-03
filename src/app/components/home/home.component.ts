import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import Article from '../../models/Article';
import { combineLatestWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private articleService: ArticleService, private router: Router) {}
  @Output() shownArticles: Article[] = [];

  private allArticles: Article[] = [];
  ngOnInit() {
    this.articleService.getArticles().subscribe((result) => {
      this.shownArticles = result;
      this.allArticles = result;
    });
  }

  filterArticles(event: Event) {
    let query = (<HTMLInputElement>event.target).value;

    query = query.replaceAll(' ', ',');
    if (query) {
      let articlesByTitle: Article[] = [];
      let articlesBySummary: Article[] = [];

      this.articleService
        .searchArticlesByTitle(query)
        .pipe(
          combineLatestWith(this.articleService.searchArticlesBySummary(query))
        )
        .subscribe(([articlesWithTitles, articlesWithSummaries]) => {
          articlesByTitle = articlesWithTitles;
          articlesBySummary = articlesWithSummaries;
          let arr = articlesBySummary.filter((item) => {
            return !articlesByTitle.find((article) => article.id === item.id);
          });
          this.shownArticles = articlesByTitle.concat(arr);
        });
    } else {
      this.shownArticles = this.allArticles;
    }
  }
}
