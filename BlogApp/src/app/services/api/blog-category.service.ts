import { Injectable } from '@angular/core';
import { BlogCategory } from '../../interface/blog-category';
import { BaseResponse } from '../../interface/api/base-response';

@Injectable({
  providedIn: 'root',
})
export class BlogCategoryService {
  baseUrl = 'https://api-dev.wsrlife.com/api';

  constructor() {}

  async Get(skip: number, take: number): Promise<BlogCategory[]> {
    const response = await fetch(
      this.baseUrl + '/blogcategory?skip=' + skip + '&take=' + take
    );

    return (await response.json()) ?? [];
  }

  async GetById(id: number): Promise<BlogCategory | undefined> {
    const data = await fetch(this.baseUrl + '/blogcategory/' + id);
    return (await data.json()) ?? {};
  }
}
