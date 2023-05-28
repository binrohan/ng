import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string){
    const postData: Post = {title, content};
    return this.http
      .post<{name: string}>(
        "https://ng-goat-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        postData
      );
  }

  createAndStorePostSubscribed(title: string, content: string){
    const postData: Post = {title, content};
    return this.http
      .post<{name: string}>(
        "https://ng-goat-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        postData,
        {
          observe: 'response',
          responseType: 'json'
        }
      ).subscribe((res) => {
        console.log(res);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        "https://ng-goat-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello'
          }),
          params: searchParams
        }
      )
      .pipe(
        map((resData: { [key: string]: Post }) => {
          const postData: Post[] = [];
          for (const key in resData) {
            if (!resData.hasOwnProperty(key)) continue;

            postData.push({
              ...resData[key],
              id: key,
            });
          }

          return postData;
        }),
        catchError(errorRes => {
          // send to analytics server
          return throwError(errorRes);
        })
      );
  }

  delete(){
    return this.http
      .delete("https://ng-goat-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json", 
      {
        observe: 'events',
        responseType: 'text'
      }).pipe(
        tap(event => {
          console.log(event);
        })
      )
  }
}
