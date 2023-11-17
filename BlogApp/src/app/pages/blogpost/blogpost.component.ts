import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostService } from '../../services/api/blog-post.service';
import { BlogPost } from '../../interface/blog-post';
import { BlogPostItemComponent } from '../../widget/blog-post-item/blog-post-item.component';

@Component({
  selector: 'app-blogpost',
  standalone: true,
  imports: [CommonModule, BlogPostItemComponent],
  templateUrl: './blogpost.component.html',
  styleUrl: './blogpost.component.css',
})
export class BlogpostComponent {
  blogPostList: BlogPost[] = [];
  blogPostService: BlogPostService = inject(BlogPostService);

  constructor() {
    this.blogPostService.Get(0, 10).then((blogPostList: BlogPost[]) => {
      this.blogPostList = blogPostList;
      console.log(this.blogPostList);
    });
  }
}
