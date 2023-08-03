export default class Article {
  id: Number = 0;
  title: string = '';
  imageUrl: string = '';
  summary: string = '';
  updatedAt: Date = new Date();

  constructor(article: any) {
    if (article) {
      this.id = article.id;
      this.title = article.title;
      this.imageUrl = article.image_url;
      this.summary = article.summary;
      this.updatedAt = new Date(article.updated_at);
    }
  }
}
