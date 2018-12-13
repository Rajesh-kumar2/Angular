import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-info">Home Component</h2>
        <p>Simple Angular 6 Application with Routing</p>
    `
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}