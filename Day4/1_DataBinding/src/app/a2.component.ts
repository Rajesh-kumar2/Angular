import { Component } from '@angular/core';

@Component({
    selector: 'assignTwo',
    template: `
        <div class="form-group">
            <label for="itemSel">Select list:</label>
            <select class="form-control" id="itemSel" [(ngModel)]=selected (change)=append(selected)>
                <option value="Item1">Item One</option>
                <option value="Item2">Item Two</option>
                <option value="Item3">Item Three</option>
            </select>
        </div>
        <br>
        <h3 class="text-warning">Selected: {{selected}}</h3>
        <h3 class="text-warning">{{data}}</h3>
    `
})

export class AssignTwoComponent {
    data: string = "";

    append(s: string) {
        this.data += s;
    }
}