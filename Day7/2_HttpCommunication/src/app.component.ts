import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './Services/data.service';
import { Post } from './Models/post';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'root',
    templateUrl: 'app.component.html',
    providers: [DataService]
})
export class RootComponent implements OnInit, OnDestroy {
    posts: Array<Post>;
    message: string;
    getPostsSubscription: Subscription;

    constructor(private dService: DataService) { }

    ngOnInit() {
        this.message = "Getting Data from the Server....";
        this.getPostsSubscription = this.dService.getPosts().subscribe((data) => {
            this.posts = data;
            this.message = "";
        }, (err: HttpErrorResponse) => {
            console.error(err);
            this.message = err.message;
        });
    }

    ngOnDestroy(): void {
        this.getPostsSubscription.unsubscribe();
    }
}