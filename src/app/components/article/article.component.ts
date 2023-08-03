import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Article from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article = new Article(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) {}
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.getArticleById(+(id || 0)).subscribe((data) => {
      this.article = data;
      // this.articleService.getArticleContent(data.url).subscribe((content) => {
      //   if (this.article) this.article.textContent = content;
      //   console.log(this.article);
      // });
    });
  }
}
