import { Component } from "@angular/core";

@Component({
    selector: 'hello',
    template: `
        <div class="container">
            <h1 class="text-danger">Hello Angular!</h1>
        </div>
    `
})
export class HelloComponent { }

// import { Component } from "@angular/core";

// @Component({
//     selector: 'hello',
//     template: '<div class="container"><h1 class="text-danger">Hello Angular!</h1></div>'
// })
// export class HelloComponent { }