import { Component } from "@angular/core";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="text-info">Data Binding</h2>  
            </div>
            <assignOne></assignOne>
            <hr>
            <assignTwo></assignTwo>
            <hr>
            <h2>Two Way Binding</h2>
            <input type="text" bindon-ngModel=message>
            <input type="text" [(ngModel)]=message [ngModelOptions]="{updateOn: 'blur'}">

            <input type="text" [(ngModel)]=city (change)=doUpdate(city)>
            <input type="text" [(ngModel)]=city (input)=doUpdate(city)>
            <h3>You are from: {{city}}</h3>

            <hr>
            <h2>Event Binding</h2>
            <button class="btn btn-success" on-click=handleClick()>Click</button>
            <button class="btn btn-success" (click)=handleClick()>Click</button>
            <a href="http://www.google.com" (click)=anchorClick($event)>Click Me</a>
            <hr>
            <h2>Property Binding</h2>
            <h3>Message: {{message}}</h3>
            <h3 innerHTML={{message}}>Data from message</h3>
            <h3 bind-innerHTML=message>Data from message</h3>
            <h3 [innerHTML]=message>Data from message</h3>
            <input type="text" [value]=message>
            <p [textContent]=message>Check</p>
        </div>
    `
})
export class RootComponent {
    message: string;

    constructor() {
        this.message = "Hello World!";
    }

    handleClick() {
        // console.log("Button is Clicked....");
        this.message = "Changed: " + new Date().toTimeString();
    }

    anchorClick(e: Event) {
        console.log(e);
        var flag = confirm("Navigating to Google....");
        if (!flag) {
            e.preventDefault();
        }
    }

    doUpdate(city: string) {
        this.message = "City given is: " + city;
    }
}