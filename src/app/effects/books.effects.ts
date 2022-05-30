import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap } from "rxjs";
import { loadBooks, loadBooksFailure, loadBooksSuccess } from "../actions/books.actions";
import { BooksService } from "../services/books.service";

@Injectable()
export class BooksEffects {
    
    constructor(
        private action$: Actions,
        private booksService: BooksService
    ) {}

    // this code executed when loadBooks action is dispatched
    loadBooks$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadBooks),
            switchMap(() => 
                // call getBooks method
                from(this.booksService.getBooks()).pipe(
                    // take the returned value and return a new success action containing books
                    map((books) => loadBooksSuccess({ books: books })),
                    // if error occurs then return a new failure action with error message
                    catchError((error) => of(loadBooksFailure({ error })))
                )
            )
        )
    );
}