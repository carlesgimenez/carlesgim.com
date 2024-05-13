import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[] = [
    {
      id: 1,
      title: 'Artículo 1 Título',
      description: 'Descripción del artículo 1, en este artículo se habla de AzureAD y Azure DevOps',
      readingTime: 5,
      categories: ['AzureAD', 'Azure DevOps'],
      date: new Date('2022-01-01')
    },
    {
      id: 2,
      title: 'Artículo 2  Título',
      description: 'Descripción del artículo 2, en este artículo se habla de AzureAD y KeyVault',
      readingTime: 3,
      categories: ['AzureAD', 'KeyVault'],
      date: new Date('2023-04-01')
    },
    {
      id: 3,
      title: 'Artículo 3  Título',
      description: 'Descripción del artículo 3, en este artículo se habla de KeyVault y Azure DevOps',
      readingTime: 2,
      categories: ['KeyVault', 'Azure DevOps'],
      date: new Date('2023-03-01')
    },
    {
      id: 4,
      title: 'Artículo 4  Título',
      description: 'Descripción del artículo 4, en este artículo se habla de RBAC y CosmosDB',
      readingTime: 1,
      categories: ['RBAC', 'CosmosDB'],
      date: new Date('2023-02-01')
    },
    {
      id: 5,
      title: 'Artículo 5  Título',
      description: 'Descripción del artículo 5, en este artículo se habla de AzureAD, Azure DevOps, CosmosDB, KeyVault y RBAC',
      readingTime: 3,
      categories: ['AzureAD', 'Azure DevOps', 'CosmosDB', 'KeyVault', 'RBAC'],
      date: new Date('2022-01-02')
    },
    {
      id: 6,
      title: 'Artículo 6  Título',
      description: 'Descripción del artículo 6, en este artículo se habla de Containers y KeyVault',
      readingTime: 3,
      categories: ['Containers', 'KeyVault'],
      date: new Date('2020-01-01')
    },
    {
      id: 7,
      title: 'Artículo 7  Título',
      description: 'Descripción del artículo 7, en este artículo se habla de Azure Policy',
      readingTime: 3,
      categories: ['Azure Policy'],
      date: new Date('2019-01-01')
    },
    {
      id: 8,
      title: 'Artículo 8  Título',
      description: 'Descripción del artículo 8, en este artículo se habla de Azure App Service y KeyVault',
      readingTime: 3,
      categories: ['App Service', 'KeyVault'],
      date: new Date('2018-01-01')
    },
  ];

  getArticles(): Article[] {
    return this.articles;
  }
  getUniqueTags(): string[] {
    const allTags = this.articles.map(article => article.categories).flat();
    return [...new Set(allTags)];
  }
}
