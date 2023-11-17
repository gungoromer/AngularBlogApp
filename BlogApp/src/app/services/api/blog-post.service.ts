import { Injectable } from '@angular/core';
import { BlogPost } from '../../interface/blog-post';
import { BaseResponse } from '../../interface/api/base-response';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  baseUrl = 'https://api-dev.wsrlife.com/api';

  constructor() {}

  async Get(skip: number, take: number): Promise<BlogPost[]> {
    const response = await fetch(
      this.baseUrl + '/blogpost?skip=' + skip + '&take=' + take
    );

    var baseResponse = (await response.json()) as BaseResponse;

    if (baseResponse.Value == 0) {
      //logger execute
      console.log(baseResponse.Message);
      return [];
    }

    return baseResponse.Value;
  }

  async GetById(id: number): Promise<BlogPost | undefined> {
    const response = await fetch(this.baseUrl + '/blogpost/' + id);

    var baseResponse = (await response.json()) as BaseResponse;

    if (baseResponse.Value == 0) {
      //logger execute
      console.log(baseResponse.Message);
      return undefined;
    }

    return baseResponse.Value;
  }
}
