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
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw error;
    }
  }

  async loadBooks(request: string, idx: number, category: string , sorting: string): Promise<any> {
    const queryParams = {
      orderBy: sorting,
      startIndex: idx,
      maxResults: 30,
      key: this._apiKey,
    };
    const queryStringParams = queryString.stringify(queryParams);
    const url = `${this._apiAddress}?q=${request}${category !== 'all' ? `+subject:${category}` : ""}&${queryStringParams}`;

    return await this.requestSender(url);
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