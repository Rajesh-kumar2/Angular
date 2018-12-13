import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h2 class="text-warning">Lazy Loaded Component...</h2>
    `
})

export class LazyComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}