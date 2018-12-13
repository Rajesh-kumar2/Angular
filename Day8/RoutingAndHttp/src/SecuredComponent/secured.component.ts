import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductAPIService } from '../Services/productAPI.service';
import { Product } from '../Models/app.product';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
    selector: 'secured',
    templateUrl: 'secured.component.html',
    providers: [ProductAPIService]
})

export class SecuredComponent implements OnInit, OnDestroy {
    products: Array<Product>;
    getProductsSubscription: Subscription;

    constructor(private pService: ProductAPIService, private aService:AuthenticationService) { }

    ngOnInit() { 
        this.getProductsSubscription = this.pService.getProducts().subscribe((data)=>{
            this.products = data;
        });
    }

    ngOnDestroy(): void {
        this.getProductsSubscription.unsubscribe();
        this.aService.logout();
    }
}