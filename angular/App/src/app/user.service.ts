import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from "./user";
import { Router } from '@angular/router';
import {ReturnObj} from "./returnobj";

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private router: Router, private returnObj: ReturnObj) { }

    getByEmail(email: string) {
        return this.http.get('http://127.0.1:3000/api/users/' + email).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('http://127.0.1:3000/api/users/' + user.email, user);
    }
}