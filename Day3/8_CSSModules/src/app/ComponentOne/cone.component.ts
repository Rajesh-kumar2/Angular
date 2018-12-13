import { Component } from "@angular/core";

const styles = require('./cone.component.css');

@Component({
    selector: 'cone',
    template: `
        <h1 class="text-success">Hello From Component One!</h1>
        <h1 class="${styles.card}">Just for Check From Component One!</h1>
    `
})
export class ComponentOne { }