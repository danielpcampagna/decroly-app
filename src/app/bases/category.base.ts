export interface Category {
  id: number;
  name: string;
  categoryId: number;
  availableForEcommerce: number;
  category_tags: Tag[]
}

export interface Tag {
  id: number,
  name: string,
  categoryId: number,
  availableForEcommerce: number,
  category_tag_courses: { courseId: number }[]
}
