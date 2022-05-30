import { Books } from "../models/books.model";

export interface BooksState {
    books: Books[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}