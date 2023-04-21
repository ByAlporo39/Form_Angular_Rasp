import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";


@Injectable()
export class userService {

    private HTTP = 'http://172.16.33.100:8080/users/';
    constructor(private http: HttpClient) { }
    users: User[] = [];

    addUser(user: User): Observable<User> {
        console.log(user);
        return this.http.post<User>(this.HTTP, user);
    }
    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.HTTP);
    }


}
export interface User {
    name: string;
    lastname: string;
    email: string;
    age: number;
    quota: number;
}