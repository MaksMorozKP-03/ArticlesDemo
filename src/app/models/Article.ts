export default class Article {
  id: Number;
  title: String;
  url: String;
  imageUrl: String;
  summary: String;
  textContent: string = '';
  updatedAt: Date;

  constructor(
    id: Number,
    title: String,
    url: String,
    imageUrl: String,
    summary: String,
    updatedAt: string
  ) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.imageUrl = imageUrl;
    this.summary = summary;
    this.updatedAt = new Date(updatedAt);
  }
}
