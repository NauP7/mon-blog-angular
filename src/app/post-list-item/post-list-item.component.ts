import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() { }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }

  lovePost(post: Post) {
    this.post.loveIts++;
    this.postService.savePosts();
  }

  noLovePost(post: Post) {
    this.post.loveIts--;
    this.postService.savePosts();
  }

}
