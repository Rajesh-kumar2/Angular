import { Component, OnInit } from '@angular/core';
import { Author } from '../Models/app.author';
import { DataService } from '../Services/data.service';

@Component({
    selector: 'alist',
    templateUrl: 'list.component.html',
    styleUrls: ['./list.component.css'.toString()]
})

export class AuthorListComponent implements OnInit {
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private dService: DataService) { }

    ngOnInit() {
        this.list = this.dService.Authors;
    }

    selectAuthor(a: Author) {
        this.dService.SelectedAuthor = a;
        this.selectedAuthor = this.dService.SelectedAuthor;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}