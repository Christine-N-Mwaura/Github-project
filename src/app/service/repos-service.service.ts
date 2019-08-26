import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReposServiceService {
_URL = 'https://api.github.com/users/';
token = '?access_token=' + "be2a54404e75c5f1646554112376bf6962f487f5";
  constructor(public http: HttpClient ) { 

  }

  getRepoInfo(username: string): Observable<any> {
    return this.http.get(this._URL + username + '/repos' +  this.token)
  }
}
