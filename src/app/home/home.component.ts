import { Component, Output } from '@angular/core';
import { ArticleService } from '../services/article.service';
import Article from '../models/Article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private articleService: ArticleService) {}
  @Output() articles: Article[] = [];

  ngOnInit() {
    this.articleService.getArticles().subscribe((result) => {
      this.articles = result;
    });
  }
}
