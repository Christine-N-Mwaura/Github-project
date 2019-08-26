import { Injectable } from '@angular/core';
import { Users } from '../users';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  users:Users[] = [];

  constructor(private http:HttpClient) { 
    
  }

  findUser(username){
    interface ApiResponse{
      login:string;
      html_url:string; 
      avatar_url:string;
      bio:any;
      name:any;
      location:any;
      followers: any;
      following: any;
      created_at : Date;
      public_repos: any
    }
    
    let searchEndpoint = "https://api.github.com/users/"+username+"?access_token="+"be2a54404e75c5f1646554112376bf6962f487f5";
    let promise = new Promise((resolve,reject)=>{
      this.users = [];
      this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
        (results)=>{
        this.users.push(results);
        console.log(results)
        resolve();
      },error=>{
        
        reject(error);
      }
      )
    })
    return promise;
  }
  
}
