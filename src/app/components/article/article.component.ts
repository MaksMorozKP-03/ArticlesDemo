import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import Article from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  article$ = new Observable<Article>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.article$ = this.articleService.getArticleById(+(id || 0));
  }
}
