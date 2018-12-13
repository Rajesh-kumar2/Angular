import { Component, Inject } from '@angular/core';
import { Author } from './Models/app.author';
import { DataService } from './Services/data.service';

@Component({
    selector: 'root',
    templateUrl: 'app.component.html',
    styles: [require('./app.component.css').toString()],
    providers: [DataService]
})
export class RootComponent {
    list: Array<Author>;
    selectedAuthor: Author;

    constructor(private dService: DataService) { }
    // constructor(@Inject(DataService) private dService: any) { }

    ngOnInit() {
        this.list = this.dService.Authors;
    }

    selectAuthor(a: Author) {
        this.selectedAuthor = a;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}