import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'squote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css'.toString()]
})

export class QuoteComponent implements OnInit, OnDestroy {
    selectedAuthor: Author;
    authorName: string;

    constructor(private dService: DataService, private route: ActivatedRoute) {
        console.log("Constructed...");
    }

    ngOnInit() {
        this.selectedAuthor = this.dService.SelectedAuthor;
        this.route.params.subscribe(p => this.authorName = p.name);
    }

    ngOnDestroy() {
        console.log("Destroyed...");
    }
}