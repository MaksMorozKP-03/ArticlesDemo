export default class Article {
  id: Number = 0;
  title: string = '';
  url: string = '';
  imageUrl: string = '';
  summary: string = '';
  textContent: string = '';
  updatedAt: Date = new Date();

  constructor(
    // id: Number,
    // title: string,
    // url: string,
    // imageUrl: string,
    // summary: string,
    // updatedAt: string
    article: any
  ) {
    if (article) {
      this.id = article.id;
      this.title = article.title;
      this.url = article.url;
      this.imageUrl = article.image_url;
      this.summary = article.summary;
      this.updatedAt = new Date(article.updated_at);
    }
  }
}
