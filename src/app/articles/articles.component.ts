import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  selectedTags: string[] = [];
  p: number = 1; // Add this line

  constructor(public articlesService: ArticlesService) { } // Change 'private' to 'public'

  ngOnInit(): void {
    this.articles = this.articlesService.getArticles(); // Initialize 'articles' with the articles from the service
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