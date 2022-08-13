import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { CommentService } from '../services/comment.service';
import { MatDialog } from '@angular/material/dialog';

// interface Blog {
//   title:string,
//   body:string,
//   imageId:number,
//   userId:number,
//   id:number
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pageSize = 8;
  page = 13;
  blogData: Array<any> = [];
  commentData: Array<any> = [];

  isUpdate: boolean = false;
  blogElement : any;
  imageUrl : string = '';
  title : string = '';
  content : string = '';

  constructor(private blogService: BlogService, private commentService: CommentService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBlogList();
  }

  getBlogList() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    });
  }
  getCommentList() {
    this.commentService.getComments().subscribe((res) => {
      this.commentData = res;
    })
  }
}
