import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <cone>Loading Component One....</cone>
            <br>
            <ctwo>Loading Component Two....</ctwo>
            <br>
            <ctwo>Loading Component Two Again....</ctwo>
        </div>
    `
})
export class RootComponent { }