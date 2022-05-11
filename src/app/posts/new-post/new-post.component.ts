import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title']
    const text = form.value['content']
    const image = form.value['image'] ? form.value['image'] : ''
    this.postService.addNewPost(title, image, text)
  }

}
