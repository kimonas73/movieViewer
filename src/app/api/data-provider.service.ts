import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from "@angular/material";
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  WebAPI = "https://api.themoviedb.org/3/";

  ImageURL = "http://image.tmdb.org/t/p/w200/";

  mostPopular1 = "discover/movie?api_key=";
  mostPopular2 = "&sort_by=popularity.desc";
  query1 = "search/movie?api_key=";
  query2 = "&query=";
  appKey = "9198fa6d9a9713bc6b03ee9582525917";
  detail1="movie/";
  detail2="?api_key=";

  constructor(private http: HttpClient, private _matSnackBar: MatSnackBar) { }

  public mostPopular(): Observable<any> {
    const url = this.WebAPI + this.mostPopular1 + this.appKey + this.mostPopular2;
    return this.http
        .get(url, {
            headers: this.setHttpHeaders()
        })
        .pipe(
            map(this.extractData),
            catchError(err => this.handleError(err))
        );
  }

  public search(by: string): Observable<any> {
    const url = this.WebAPI + this.query1 + this.appKey + this.query2 + by + this.mostPopular2;
    return this.http
        .get(url, {
            headers: this.setHttpHeaders()
        })
        .pipe(
            map(this.extractData),
            catchError(err => this.handleError(err))
        );
  }

  public find(id: string): Observable<any> {
    const url = this.WebAPI + this.detail1 + id + this.detail2 + this.appKey;
    return this.http
        .get(url, {
            headers: this.setHttpHeaders()
        })
        .pipe(
            map(this.extractData),
            catchError(err => this.handleError(err))
        );
  }

  public setHttpHeaders() {
    return new HttpHeaders()
        .set("Content-Type", "application/json; charset=utf-8")
        .set("Accept", "application/json");
  }
  
  public handleError(response: any) {
    let error: string = "";
    switch (response.status) {
        case 200:
            error = "HTTP 200: Invalid preflight CORS request";                
            break;
        case 500:
            error = "HTTP 500: Internal Server Error";
            break;
        case 400:
            error = "HTTP 400: Bad Request";
            break;
        case 401:
            error = "HTTP 401: Unauthorized";
            break;
        case 404:
            error = "HTTP 404: Not Found";
            break;
        case 405:
            error = "HTTP 405: 	Method Not Allowed";
            break;
    }
    this._matSnackBar.open(response.message, "Close", { verticalPosition: "bottom", duration: 5000 });
    return of(response);
}

public extractData(res) {
    const body = res.results != null ? res.results : res;
    return body != null ? body : {};
}
}
