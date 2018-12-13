import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <h1 class="text-danger">Root Component - Root Module</h1>
            <cone>Loading Component One....</cone>
            <br>
            <ctwo>Loading Component Two....</ctwo>
        </div>
    `
})
export class RootComponent { }