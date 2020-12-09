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

export interface SingleCategory {
  id: number;
  name: string;
  color: string;
  shadow?: boolean;
  preview?: string;
  minWidth?: string;
  onClick?: () => void;
}
export default Category;
