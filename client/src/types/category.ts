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

export interface ICategoryValue {
  title: string;
  color: string;
  value: number;
}

export default Category;
