import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = []; // Initialize the 'articles' property
  selectedTags: string[] = [];
  constructor(@Inject(ArticlesService) private articlesService: ArticlesService) { }

  ngOnInit(): void {
    // Add your initialization logic here
  }

  getFilteredArticles(): Article[] {
    if (this.selectedTags.length === 0) {
      return this.articles;
    }
    return this.articles.filter(article => 
      article.categories.some(category => this.selectedTags.includes(category))
    );
  }

  onTagChange(tag: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
  }
}
