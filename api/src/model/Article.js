export class Article {
  constructor({ id, title, content, authorId, author, updatedAt, createdAt }) {
    this._id = id;
    this.title = title;
    this.content = content;
    this.authorId = authorId;
    this.author = author;
    this._updatedAt = updatedAt;
    this._createdAt = createdAt;
  }
}
