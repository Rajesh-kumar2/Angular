import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'

import { RootComponent } from "./app.component";
import { AuthorListComponent } from './ListComponent/list.component';
import { QuoteComponent } from './QuoteComponent/quote.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, AuthorListComponent, QuoteComponent],
    bootstrap: [RootComponent]
})
export class AppModule { }