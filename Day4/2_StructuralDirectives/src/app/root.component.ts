import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="text-info">Structural Directives</h2>  
            </div>
            <list></list>
            <hr/>
            <h3 *ngIf="message; else elseBlock">{{message}}</h3>
            <ng-template #elseBlock>
                <h3>Nothing to Display</h3>
            </ng-template>
            <button (click)=doChange()>Change</button>
            <div [ngSwitch]="person">
                <h3 *ngSwitchCase="'Manish'">Hello, Manish</h3>
                <h3 *ngSwitchCase="'Abhijeet'">Hello, Abhijeet</h3>
            </div>
        </div>    
    `
})
export class RootComponent {
    message: string;
    person: string;

    constructor() {
        this.person = "Abhijeet";
    }

    doChange() {
        if (this.person == "Abhijeet")
            this.person = "Manish";
        else
            this.person = "Abhijeet";
    }
}