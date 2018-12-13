import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../Models/post";

@Injectable()
export class DataService{
    private url = "https://asjsonplaceholder.typicode.com/posts";

    constructor(private http: HttpClient) { }

    getPosts(){
        var obj = this.http.get<Array<Post>>(this.url);
        return obj;
    }
}