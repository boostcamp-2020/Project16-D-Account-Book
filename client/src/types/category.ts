export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface CategoryRequest {
  accountbookId: number;
  name: string;
  color: string;
}

export default Category;
