import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CommentsModelServer, ServerResponse } from '../models/comments.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private SERVER_URL = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  /* Duyệt tất cả sản phẩm từ backend server */
  // tslint:disable-next-line:typedef
  getAllComments(numberOfResult = 10): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.SERVER_URL + '/comments', {
      params: {
        limit: numberOfResult.toString()
      }
    });
  }

  /* Lấy tất cả bình luận từ một sản phẩm */
  getCommentsByProduct(id: string): Observable<CommentsModelServer[]> {
    return this.http.get<CommentsModelServer[]>(this.SERVER_URL + '/comments/' + id);
  }

  /* Thêm bình luận mới vào db */
  // tslint:disable-next-line:typedef
  newComment(data: any): Observable<ServerResponse> {
    console.log(data, 'post new comment success!');
    return this.http.post<ServerResponse>(this.SERVER_URL + '/comments/new', data);
  }

  /* Thêm yêu cầu xoá bình luận vào db */
  // tslint:disable-next-line:typedef
  removeCommentRequest(data: any): Observable<ServerResponse> {
    console.log(data, 'Send request success!');
    return this.http.post<ServerResponse>(this.SERVER_URL + '/comments/request', data);
  }
}
