import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { CounterComponent } from "./Counter/counter.component";

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h2 class="text-info">Communication - Parent Child</h2>  
            </div>

            <h3 class="text-danger">{{counterMessage}}</h3>

            <counter #c (onMax)=maxedOut($event)>
                <h3 class="text-success">Counter with Default Interval</h3>
            </counter>

            <br/>
            <div class="row">
                <div class="col-md-2">
                    <button class="btn btn-danger btn-block" (click)=c.reset()>Parent Reset</button>
                </div>
                <div class="col-md-2">
                    <button class="btn btn-warning btn-block" (click)=p_reset(c)>Parent Reset</button>
                </div>
            </div>

            <!-- <counter [interval]=1>
                <h1>Counter with Interval 1</h1>
            </counter>

            <counter [interval]=5>
                <h1>Counter with Interval 5</h1>
            </counter> -->

            <!-- <div>
                <h3>Parent</h3>
                <h4>{{message}}</h4>
                <h4>Id: {{employee.id}}</h4>
                <h4>Name: {{employee.name}}</h4>
                <child [msg]=message [data]=employee></child> 
            </div> -->

            <!-- <list [personList]=pList></list> -->
        </div>    
    `
})
export class RootComponent implements AfterViewInit {
   
    pList: Array<string>;
    message: string;
    employee: { id: number, name: string };
    counterMessage: string;
    
    @ViewChild(CounterComponent)
    myCounter: CounterComponent;

    constructor() {
        this.message = "In Parent";
        this.pList = ["Manish", "Abhijeet", "Ramakant", "Subodh"];
        this.employee = { id: 1, name: "Manish" };
        this.counterMessage = "";
    }

    ngAfterViewInit(): void {
        this.myCounter.interval = 10;
    }

    p_reset(counter: CounterComponent){
        // counter.reset();
        this.myCounter.reset();
    }

    maxedOut(flag:boolean){
        if(flag)
            this.counterMessage = "Max count reached, please reset to continue...";
        else
            this.counterMessage = "";
    }
}