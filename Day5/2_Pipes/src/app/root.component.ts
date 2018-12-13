import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="text-info">Angular Pipes</h2>  
            </div>

            <h3>Name is: {{name | capitalize}}</h3>

            <h3>Name is: {{name}}</h3>
            <h3>Name is: {{name | uppercase}}</h3>
            <h3>{{now}}</h3>
            <h3>{{now | date}}</h3>
            <h3>{{now | date:'MMMM dd, yyyy'}}</h3>
            <h3>{{now | date:format}}</h3>
            <button (click)=toggleFormat()>Toggle Date</button>
        </div>    
    `
})
export class RootComponent {
    pList: Array<string>;
    name: string;
    now: Date;
    toggle: boolean;

    constructor() {
        this.pList = ["Manish", "Abhijeet", "Ramakant", "Subodh"];
        this.name = "manish sharma";
        this.now = new Date();
        this.toggle = false;
    }

    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }

    toggleFormat() {
        this.toggle = !this.toggle;
    }
}