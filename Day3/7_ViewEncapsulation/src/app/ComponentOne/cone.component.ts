// //1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'cone',
//     template: `
//         <h1 class="text-success">Hello From Component One!</h1>
//         <h1 style="border-style: solid; border-width:2px;border-color:green;">Just for Check From Component One!</h1>
//     `
// })
// export class ComponentOne { }

// //2. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'cone',
//     template: `
//         <style>
//             .card{
//                 border-style: solid; 
//                 border-width: 2px;
//                 border-color: green;
//             }
//         </style>
//         <h1 class="text-success">Hello From Component One!</h1>
//         <h1 class="card">Just for Check From Component One!</h1>
//     `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class ComponentOne { }

// //3. Component Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'cone',
//     styles: [`
//         .card{
//             border-style: solid; 
//             border-width: 2px;
//             border-color: green;
//         }
//     `],
//     template: `
//         <h1 class="text-success">Hello From Component One!</h1>
//         <h1 class="card">Just for Check From Component One!</h1>
//     `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class ComponentOne { }

//4. External Style
import { Component } from "@angular/core";

@Component({
    selector: 'cone',
    styleUrls: ['./cone.component.css'.toString()],
    template: `
        <h1 class="text-success">Hello From Component One!</h1>
        <h1 class="card1">Just for Check From Component One!</h1>
    `
})
export class ComponentOne { }