import { Component } from '@angular/core';

@Component({
    selector: 'assignOne',
    template: `
        <input type="checkbox" [(ngModel)]=flag> Accept Terms 
        <br>
        <button class="btn btn-success" [disabled]=!flag>Next</button>
    `
})

export class AssignOneComponent { }