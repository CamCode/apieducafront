import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://jsonplaceholder.typicode.com/'
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor( private http: HttpClient) { }
  get (data, endpoint):Observable<any>{

  }
  private handleError(error: HttpErrorResponse){}
  
}
