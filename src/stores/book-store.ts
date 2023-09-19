import { makeAutoObservable } from 'mobx';
import BookLoaderService from '../services/book-loader-service';

export interface Book {
  id: string;
  volumeInfo: {
    categories: string[];
    authors: string[];
    title: string;
    imageLinks: {
      smallThumbnail: string | null;
      thumbnail: string;
    }
  };
}

class BookStore {
  query = '';
  books: Book[] = [];
  isLoading = false;
  private startIndex = 0;
  categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
  selectedCategory = 'all';
  sortingOptions = ['relevance', 'newest'];
  selectedSortingOption = 'relevance';
  totalItems = 0;
  showBooksList = false;
  bookId: string | undefined = '';
  bookData: any = [];

  constructor() {
    makeAutoObservable(this);
  }

  handleSearch = async () => {
    if (this.query.trim() !== '') {
      this.setShowBooksList(true);
      this.setIsLoading(true);

      try {
        const response = await this.loadBooks(this.query, this.startIndex, this.selectedCategory, this.selectedSortingOption);

        const booksData = response.items || [];
        this.setTotalItems(response.totalItems);
        this.setBooks(booksData);
        this.setIsLoading(false);
      } catch (error) {
        console.error('Error loading books:', error);
        this.setIsLoading(false);
        this.setShowBooksList(false);
      }
    }
  };

  loadMoreBooks = async () => {
    if (this.books.length === 0) return;
    this.setIsLoading(true);
    setTimeout(()=> {
      window.scrollTo(0, document.body.scrollHeight)
    }, 0)

    try {
      const response = await this.loadBooks(this.query, this.startIndex + 30, this.selectedCategory, this.selectedSortingOption);
      const newBooks = response.items || [];
      this.addBooks(newBooks);
      this.setIsLoading(false);
      this.setStartIndex(this.startIndex + 30);
    } catch (error) {
      console.error('Error loading more books:', error);
      this.setIsLoading(false);
    }
  };

  handleSearchInfo = async () => {
    this.setIsLoading(true);

    try {
      const response = await this.loadBookInfo(this.bookId);

      this.setBookData(response.volumeInfo);
      this.setIsLoading(false);
    } catch (error) {
      console.error('Error loading info about book:', error);
      return null;
    }
  }

  private loadBooks = async (request: string, idx: number, category: string , sorting: string) => {
    const bookLoader = new BookLoaderService();
    return await bookLoader.loadBooks(request, idx, category, sorting);
  };

  loadBookInfo = async (bookId: string | undefined) => {
    const bookData = new BookLoaderService();
    return await bookData.loadBookInfo(bookId);
  }

  public setQuery = (query: string) => {
    this.query = query;
  };

  private setBooks = (books: Book[]) => {
    this.books = books;
  };

  private addBooks = (newBooks: Book[]) => {
    this.books = this.books.concat(newBooks);
  };

  private setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  private setStartIndex = (startIndex: number) => {
    this.startIndex = startIndex;
  };

  public readonly setCategory = (category: string) => {
    this.selectedCategory = category;
  };

  public readonly setSortingOption = (option: string) => {
    this.selectedSortingOption = option;
  };

  private setTotalItems = (totalItems: number) => {
    this.totalItems = totalItems;
  };

  private setShowBooksList = (show: boolean) => {
    this.showBooksList = show;
  };

  setBookId = (bookId: string | undefined) => {
    this.bookId = bookId;
  }

  private setBookData = (bookData: any) => {
    this.bookData = bookData;
  }
}

const bookStore = new BookStore();

export default bookStore;