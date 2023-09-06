import queryString from 'query-string';

export default class BookLoaderService {
  private readonly _apiKey: string;
  readonly _apiAddress: string;
  constructor() {
    this._apiKey = "AIzaSyB7wX0Vplokj3qubEypEF5TU1LXeKUmnKI";
    this._apiAddress = "https://www.googleapis.com/books/v1/volumes"
  }

  private async requestSender(url: string): Promise<any> {
    try {
      const response = await fetch(url);

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  async loadBooks(request: string, idx: number = 0): Promise<any> {
    const queryParams = {
      q: request,
      startIndex: idx,
      maxResults: 30,
      key: this._apiKey,
    };
    const queryStringParams = queryString.stringify(queryParams);
    const url = `${this._apiAddress}?${queryStringParams}`;

    return this.requestSender(url);
  }

  async loadBookInfo(bookId: number): Promise<any> {
    const queryParams = {
      key: this._apiKey,
    };
    const queryStringParams = queryString.stringify(queryParams);
    const url = `${this._apiAddress}/${bookId}?${queryStringParams}`;

    return this.requestSender(url);
  }
}