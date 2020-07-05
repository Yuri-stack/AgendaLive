import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponsePageable } from '../models/responsePageable.model'

@Injectable({
  providedIn: 'root'
})
export class LiveService {
    apiUrl = 'http://localhost:8080/lives';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'aplication/json'
      })
    }

    constructor(
      private httpClient: HttpClient
  ) {}

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
}
}
