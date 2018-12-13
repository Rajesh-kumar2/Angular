import { Component } from '@angular/core';
import { Author } from './Models/app.author';
import { DataService } from './Services/data.service';

@Component({
    selector: 'root',
    templateUrl: 'app.component.html',
    providers: [DataService]
})
export class RootComponent {
    
}