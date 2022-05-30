import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { booksReducer } from './reducers/books.reducers';
import { BooksEffects } from './effects/books.effects';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({books: booksReducer}),
    EffectsModule.forRoot([BooksEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
