import { HttpClient } from "@angular/common/http";
import { Product } from "../Models/app.product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductAPIService {
    private url = "http://localhost:8000/api/products";

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Array<Product>>(this.url);
    }
}