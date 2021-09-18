import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PostModelServer, ServerResponse } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  /* Duyệt tất cả sản phẩm từ backend server */
  // tslint:disable-next-line:typedef
  getAllPost(numberOfResult = 10): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.SERVER_URL + '/post', {
      params: {
        limit: numberOfResult.toString()
      }
    });
  }

  /* Lấy một sản phẩm từ server */
  getPostDetail(id: number): Observable<PostModelServer> {
    return this.http.get<PostModelServer>(this.SERVER_URL + '/post/' + id);
  }
}
