import {Component} from '@angular/core';
import {ArticleService} from './article.service';

@Component({
  selector: 'article',
  template: `
    <p>Article component!</p>
  `
})
export class ArticleComponent {
  constructor(private articleService_:ArticleService) {}
}
