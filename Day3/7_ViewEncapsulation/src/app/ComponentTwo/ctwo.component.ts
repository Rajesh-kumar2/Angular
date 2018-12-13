// //1. Element Inline Style
// import { Component } from "@angular/core";

// @Component({
//     selector: 'ctwo',
//     template: `
//         <h1 class="text-info">Hello From Component Two!</h1>
//         <h1 style="border-style: solid; border-width:2px;border-color:blue;">Just for Check From Component Two!</h1>
//     `
// })
// export class ComponentTwo { }

// //2. Template Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'ctwo',
//     template: `
//         <style>
//             .card{
//                 border-style: solid; 
//                 border-width: 2px;
//                 border-color: blue;
//             }
//         </style>
//         <h1 class="text-info">Hello From Component Two!</h1>
//         <h1 class="card">Just for Check From Component Two!</h1>
//     `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class ComponentTwo { }

// //3. Component Inline Style
// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//     selector: 'ctwo',
//     styles: [`
//         .card{
//             border-style: solid; 
//             border-width: 2px;
//             border-color: blue;
//         }
//     `],
//     template: `
//         <h1 class="text-info">Hello From Component Two!</h1>
//         <h1 class="card">Just for Check From Component Two!</h1>
//     `,
//     encapsulation: ViewEncapsulation.Emulated
// })
// export class ComponentTwo { }

//4. External Style
import { Component } from "@angular/core";

@Component({
    selector: 'ctwo',
    styleUrls: ['./ctwo.component.css'.toString()],
    template: `
        <h1 class="text-info">Hello From Component Two!</h1>
        <h1 class="card2">Just for Check From Component Two!</h1>
    `
})
export class ComponentTwo { }