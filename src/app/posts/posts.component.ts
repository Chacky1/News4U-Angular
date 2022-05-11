import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.posts = this.postService.posts
  }

  readPost(id: number): void {
    this.router.navigate([id], { relativeTo: this.route })
  }

  createPost(): void {
    this.router.navigate(['new-post'], { relativeTo: this.route })
  }

}
