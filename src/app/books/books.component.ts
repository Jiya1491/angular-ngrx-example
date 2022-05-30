import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-books',
    templateUrl: 'books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    
    public books:any;
    constructor(private store: Store<) {}

    ngOnInit() {
        this.books = this.booksService.getBooks();
    }
}