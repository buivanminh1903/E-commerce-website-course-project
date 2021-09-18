import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { PostModelServer, ServerResponse } from '../../models/post.model';
import { map } from 'rxjs/operators';

declare let $: any;

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  // @ts-ignore
  public postList: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  // @ts-ignore
  id: number;
  // @ts-ignore
  post;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.Id;
        })
      )
      .subscribe(id => {
        this.id = id;
        this.postService.getPostDetail(this.id).subscribe(prod => {
          this.post = prod;
          this.postList = prod;
        });
      });
  }

}
