import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { PostModelServer, ServerResponse } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: PostModelServer[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    // tslint:disable-next-line:ban-types
    this.postService.getAllPost().subscribe((prods: ServerResponse) => {
      this.post = prods.post;
    });
  }

}
