import { Component, OnInit } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'squote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css'.toString()]
})

export class QuoteComponent implements OnInit {
    selectedAuthor: Author;

    constructor(private dService:DataService) { }

    ngOnInit() { }

    get(){
        this.selectedAuthor = this.dService.SelectedAuthor;
    }
}