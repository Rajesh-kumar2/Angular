//3. Using FormBuilder and Validations
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'rf',
    templateUrl: 'rf.component.html'
})

export class ReactiveFormComponent implements OnInit {
    rForm: FormGroup;

    private formBuilder: FormBuilder;
    constructor(fb: FormBuilder) {
        this.formBuilder = fb;
    }

    ngOnInit() {
        this.rForm = this.formBuilder.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.compose([Validators.required, Validators.minLength(2),
            Validators.maxLength(20)])],
            address: this.formBuilder.group({
                city: [null, Validators.required],
                zip: 0
            })
        })
    }

    logForm(frm: FormGroup) {
        if (frm.valid)
            console.log(frm.value); // Send Data to Service
        else
            console.error("Invalid Form....");
    }
}

// //2. Using FormBuilder
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//     selector: 'rf',
//     templateUrl: 'rf.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     rForm: FormGroup;

//     private formBuilder: FormBuilder;
//     constructor(fb: FormBuilder) {
//         this.formBuilder = fb;
//     }

//     ngOnInit() {
//         this.rForm = this.formBuilder.group({
//             firstname: "",
//             lastname: "",
//             address: this.formBuilder.group({
//                 city: "",
//                 zip: 0
//             })
//         })
//     }

//     logForm(frm: FormGroup) {
//         console.log(frm.value);
//     }
// }

// //1. Using new Keyword
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//     selector: 'rf',
//     templateUrl: 'rf.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     rForm: FormGroup;

//     constructor() { }

//     ngOnInit() { 
//         this.rForm = new FormGroup({
//             firstname: new FormControl(),
//             lastname: new FormControl(),
//             address: new FormGroup({
//                 city: new FormControl(),
//                 zip: new FormControl()
//             })
//         })
//     }

//     logForm(frm: FormGroup) {
//         console.log(frm.value);
//     }
// }