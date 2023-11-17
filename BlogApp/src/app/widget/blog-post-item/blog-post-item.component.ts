import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BlogPost } from '../../interface/blog-post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-post-item',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './blog-post-item.component.html',
  styleUrl: './blog-post-item.component.css',
})
export class BlogPostItemComponent {
  @Input() blogPost!: BlogPost;
}
