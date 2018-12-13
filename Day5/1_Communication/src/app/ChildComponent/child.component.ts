import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'child',
    template: `
        <h3 class="text-info">Child</h3>
        <h4>{{msg}}</h4>
        <h4>Id: {{data.id}}</h4>
        <h4>Name: {{data.name}}</h4>
        <button class="btn btn-info" (click)=doChange()>Change Data</button>
    `
})

export class ChildComponent implements OnInit {
    @Input() data: { id: number, name: string };
    @Input() msg: string;

    constructor() { }

    ngOnInit() { }

    doChange() {
        this.msg = "Changed " + new Date().toTimeString();
        var obj = Object.assign({}, this.data);
        obj.name = "Changed " + new Date().toTimeString();
        this.data = obj;
    }
}