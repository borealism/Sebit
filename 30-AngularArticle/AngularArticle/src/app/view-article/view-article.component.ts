import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  articleId: any;
  articlesData: Array<any> = [];

  username: string = '';
  comment: string = '';

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('articleIndex');
    this.articleService.getArticles().subscribe((res) => {
      this.articlesData = res;
    })
  }

  addComment() {
    if(this.username == '' || this.comment == '')
    {
      this.snackBar.open('Lütfen tüm alanları doldurunuz', 'Kapat');
    } else {
      let uptObj = {
        username: this.username,
        comments: this.comment,
      };
      this.articlesData[this.articleId].comments.push(uptObj);
      this.articleService.updateArticle(this.articlesData[this.articleId]).subscribe((res) => {
        //inputları sıfırlamak için
        this.username = '';
        this.comment = '';
      })
      };
    }

  }
