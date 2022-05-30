import { createAction, props } from "@ngrx/store";
import { Books } from "../models/books.model";

export const loadBooks = createAction('[Books Page] Load Books');

export const loadBooksSuccess = createAction(
    '[Books Page] Load Books Success',
    props<{ books: Books[] }> ()
);

export const loadBooksFailure = createAction(
    '[Books Page] Load Books Failure',
    props<{ error: string }> ()
);