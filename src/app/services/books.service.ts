import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BOOKS } from "src/mocks/books.mock";

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    getBooks(): Observable<any> {
        return of(BOOKS);
    }
}