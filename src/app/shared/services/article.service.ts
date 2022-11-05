import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Article } from "../article";
import { catchError, Observable, retry, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  baseURL: string = '/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  getID(articleName: string): Observable<JSON> {
    let URL = this.baseURL + 'getID'
    const body =
    {
      articleName: articleName
    }
    return this.http.post<JSON>(URL, body).pipe(retry(1), catchError(this.errorHandler))
  }
  getArticles(): Observable<Article[]> {
    let URL = this.baseURL + '/articles'
    return this.http.get<Article[]>(URL).pipe(retry(1), catchError(this.errorHandler))
  }
  getArticle(articleID: string): Observable<Article> {
    let URL = this.baseURL + '/getID' + articleID
    return this.http.get<Article>(URL).pipe(retry(1), catchError(this.errorHandler))
  }
  createArticle(data:JSON){
    let URL = this.baseURL + '/new/article'
    return this.http.post(URL, data).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error.message || "server error")
  }

}
