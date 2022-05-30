import { createReducer, on } from '@ngrx/store';
import { loadBooks, loadBooksFailure, loadBooksSuccess } from '../actions/books.actions';
import { BooksState } from '../state/books.state';

export const initialState: BooksState = {
    books: [],
    error: '',
    status: 'pending'
}

export const booksReducer = createReducer(
    // initial state
    initialState,
    // trigger loading the books
    on(loadBooks, (state) => ({ ...state, status: 'loading'})),
    // handle successfully loaded books
    on(loadBooksSuccess, (state, {books}) => ({
        ...state,
        books: books,
        error: '',
        status: 'success'
    })),
    // handle books load failure
    on(loadBooksFailure, (state, { error }) => ({
        ...state,
        books: [],
        error: error,
        status: 'error'
    }))
);