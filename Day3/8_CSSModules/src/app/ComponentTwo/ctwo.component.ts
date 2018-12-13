import { Component } from "@angular/core";

const styles = require('./ctwo.component.css');

@Component({
    selector: 'ctwo',
    styleUrls: ['./ctwo.component.css'.toString()],
    template: `
        <h1 class="text-info">Hello From Component Two!</h1>
        <h1 class="${styles.card}">Just for Check From Component Two!</h1>
    `
})
export class ComponentTwo { }