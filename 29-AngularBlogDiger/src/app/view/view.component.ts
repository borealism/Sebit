import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  commentData: any;
  blogId: any;
  blogObj: any = {};
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('blogid');
    this.blogService.getPost(this.blogId).subscribe((res) => {
      debugger;
      this.blogObj = res;
    });

    this.commentService.getComments().subscribe((res) => {
      this.commentData = res.filter(
        (x: { postId: any }) => x.postId == this.blogId
      );
      debugger;
    });
  }
}
