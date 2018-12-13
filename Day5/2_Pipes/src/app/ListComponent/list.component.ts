import { Component, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent {
    @Input() personList: Array<string>;
    selectedPerson: string;

    constructor() {
        
    }

    select(p: string, e: Event) {
        this.selectedPerson = p;
        e.preventDefault();
    }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//     selector: 'list',
//     templateUrl: 'list.component.html',
//     inputs: ['personList']
// })

// export class ListComponent {
//     personList: Array<string>;
//     selectedPerson: string;

//     constructor() {
        
//     }

//     select(p: string, e: Event) {
//         this.selectedPerson = p;
//         e.preventDefault();
//     }
// }