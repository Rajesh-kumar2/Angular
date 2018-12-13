import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
    personList: Array<string>;
    selectedPerson: string;

    constructor() {
        this.personList = ["Manish", "Abhijeet", "Ramakant", "Subodh"];
    }

    select(p: string, e: Event) {
        this.selectedPerson = p;
        e.preventDefault();
    }
}