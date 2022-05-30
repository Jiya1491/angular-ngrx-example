import { Component, OnInit } from "@angular/core";
import { select, Store } from '@ngrx/store';
import { loadBooks } from "../actions/books.actions";
import { getAllBooks } from "../selectors/books.selectors";

@Component({
    selector: 'app-books',
    templateUrl: 'books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    
    constructor(private store: Store) {}

    public allBooks = this.store.pipe(select(getAllBooks));

    ngOnInit() {
        this.store.dispatch(loadBooks());
    }
}