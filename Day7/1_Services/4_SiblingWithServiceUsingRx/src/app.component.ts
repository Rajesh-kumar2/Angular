import { Component, Inject } from '@angular/core';
import { DataService } from './Services/data.service';

@Component({
    selector: 'root',
    templateUrl: 'app.component.html',
    providers: [DataService]
})
export class RootComponent {}