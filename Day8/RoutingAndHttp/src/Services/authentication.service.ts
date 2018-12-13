import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class AuthenticationService {
    private url = "http://localhost:8000/api/authenticate";

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(this.url, { username: username, password: password })
            .pipe(map(resObject => {
                if (resObject && resObject.token) {
                    localStorage.setItem("tk", resObject.token);
                }

                return resObject;
            }));
    }

    logout(){
        localStorage.removeItem('tk');
    }

    getToken(){
        return localStorage.getItem("tk");
    }
}