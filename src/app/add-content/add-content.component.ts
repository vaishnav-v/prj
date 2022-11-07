import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../shared/article';
import { ArticleService } from '../shared/services/article.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent implements OnInit {
  addArticleForm!: FormGroup;
  constructor
    (
      private fb: FormBuilder,
      private articleService: ArticleService,
      private article: Article,
      
    ) {

  }
  ngOnInit(): void {
    this.addArticleForm = this.fb.group(
      {
        articleTitle: ['', [Validators.required]],
        content: ['', [Validators.required]]
      }
    )
  }
  onSubmit(){
    console.log(this.addArticleForm.value); 
  }

  addArticle() {
    this.articleService.createArticle(this.article).subscribe((data) => {
      console.log(data);
    })
  }

  
}
