
import { Injectable } from '@angular/core';
import { ReturnObj } from './returnobj';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()


export class PostsService{
    constructor(private ret:ReturnObj,private http :HttpClient){}

    getPost(cat:string, val:string):Promise<any>{
        // return this.getProducts().then(products=>products.find(obj=>obj.id==id));
        const url = 'http://127.0.1:3000/api/users/posts/'+cat+'/'+val;
        return this.http.get(url)
        .toPromise()
        .then(data=>data)
        .catch(this.handleError);

    }
    private handleError(error:any):Promise<any>{
        console.error('Error:',error); 
        return  Promise.reject(error);
    }

}