import { Post } from '../models/Post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

export class PostService {

  posts: Post[] = [];
	postSubject = new Subject<Post[]>();

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

}