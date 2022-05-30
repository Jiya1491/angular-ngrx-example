import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BooksState } from "../state/books.state";

export const getBooksState = createFeatureSelector<BooksState>('books');

export const getAllBooks = createSelector(getBooksState, (state) => state.books);