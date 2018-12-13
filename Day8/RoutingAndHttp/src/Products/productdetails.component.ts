import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";

@Component({
    selector: 'pd',
    template: `
        <div class="outerdiv">
            <div class="innerdiv">
                <div *ngIf="product">
                    <h3>{{product.name}}</h3>
                    <p>{{product.description}}</p>
                    <hr>
                    <h4>{{product.status}}</h4>
                </div>    
            </div>
        </div>
    `
})

export class ProductDetailsComponent implements OnInit {
    product: any;

    constructor(private pService: ProductsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.pipe(map(p => p["id"])).subscribe(id => {
            this.product = this.pService.Products.find(p => p.id == id);
        });
    }
}