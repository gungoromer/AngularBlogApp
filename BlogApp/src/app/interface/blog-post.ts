import { BlogCategory } from './blog-category';

export interface BlogPost {
  Id: number;
  Title: string;
  Content: string;
  IsActive: boolean;
  CoverImageUrl: string;
  BlogTag: string[];
  BlogCategory: BlogCategory;
}
