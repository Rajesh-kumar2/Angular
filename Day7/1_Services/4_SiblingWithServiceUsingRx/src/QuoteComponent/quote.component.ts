import { Component, OnInit, OnDestroy } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'squote',
    templateUrl: 'quote.component.html',
    styleUrls: ['./quote.component.css'.toString()]
})

export class QuoteComponent implements OnInit, OnDestroy {
    selectedAuthor: Author;
    sAuthorSubscription: Subscription;

    constructor(private dService: DataService) { }

    ngOnInit() {
        this.sAuthorSubscription = this.dService.selectedAuthorChanged.subscribe(() => {
            this.selectedAuthor = this.dService.SelectedAuthor;
        });
    }

    ngOnDestroy(): void {
        this.sAuthorSubscription.unsubscribe();
    }
}