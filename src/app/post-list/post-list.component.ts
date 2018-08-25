import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  postsSubscription : Subscription;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
  	this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
